require("dotenv").config();
const express = require("express");
const cors = require('cors');
const axios = require("axios");
const redis = require('redis');
const MongoClient = require('mongodb').MongoClient;

const catApiBaseUrl = "https://api.thecatapi.com/v1"
const URI = process.env.MONGODB_URI;
const key = process.env.CAT_API_KEY;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

let db = null;

MongoClient.connect(URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db('dogs').collection('breeds');
});

const redisClient = redis.createClient();
redisClient.connect();

app.get('/', (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({status: 'Error', message: '405 Wrong Method'})
    }
    res.status(200).json({status: 'Success', message: 'Hello, world!'});
})

app.get('/breeds/cats', async (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({status: 'Error', message: '405 Wrong Method'})
    }
    const cats = await redisClient.get('cats');
    if (cats) {
        res.status(200).json({status: 'Success', data: JSON.parse(cats)});
        return;
    }
    axios.get(`${catApiBaseUrl}/breeds`, { headers: { 'x-api-key': key } } )
    .then(async response => {
        await redisClient.set('cats', JSON.stringify(response.data));
        res.status(200).json({status: 'Success', data: response.data})
    })
    .catch(err => {
        res.status(404).send({status:'error', message:'Error retrieving all breeds.', data: []});
    });
})

app.get('/breeds/:breedId', async (req, res) => {
    const breedId = req.params.breedId;
    const breedInfo = await redisClient.get(`${breedId}Info`);
    if (breedInfo) {
        console.log(breedInfo)
        res.status(200).json({status:'Success', data: JSON.parse(breedInfo)});
        return;
    }
    const url = `${catApiBaseUrl}/breeds/search?q=${breedId}`;
    axios.get(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(async response => { 
        if (response.data && response.data.length > 0) {
            await redisClient.set(`${breedId}Info`, JSON.stringify(response.data));
            res.status(200).json({status:'Success', data: response.data});
        } else
            res.status(404).json({status:'Error', message: `No data found for breed ID ${breedId}`, data: []})
    })
    .catch(err => res.json({status:'error', message:`Error retrieving images for breed with id ${breedId}`, data: []}));
})

app.get('/images/:breedId', (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({status: 'Error', message: '405 Wrong Method'})
    }
    const breedId = req.params.breedId;
    //const breedImages = redisClient.get()
    const url = `${catApiBaseUrl}/images/search?breed_id=${breedId}&limit=50`;
    axios.get(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(response => { 
        if (response.data && response.data.length > 0)
            res.status(200).json({status:'Success', data: response.data})
        else
            res.status(404).json({status:'Error', message: `No data found for breed ID ${breedId}`, data: []})
    })
    .catch(err => res.json({status:'error', message:`Error retrieving images for breed with id ${breedId}`, data: []}));
})

app.put('/updateSearchCount/:breedId', (req, res) => {
    if (req.method !== 'PUT') {
        res.status(405).json({status: 'Error', message: '405 Wrong Method'})
    }
    const breedId = req.params.breedId;
    db.updateOne(
        { '_id' : parseInt(breedId) },
        { $inc : { 'searches' : 1 } }
    ).then(result => {
        res.status(200).json({status:'Success', message: `Search count for breed with ID ${breedId} updated.`})
    }).catch(err => 
        res.status(404).json({status: 'Error', message: 'Resource not found', data: []}
    ));
})

app.get('/topDogs', (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({status: 'Error', message: '405 Wrong Method'})
    }
    db.find().sort( { searches : -1} ).limit(10).toArray()
    .then(topTen => res.status(200).json({status: 'Success', data: topTen}))
    .catch(err => res.status(404).json({status: 'Error', message: 'Error retrieving top dogs', data: []}))
})

app.get('/_ah/warmup', (req, res) => {
    res.json({status: 'Success'})
})

app.all('/*', (req, res) => {
    res.status(404).json({status: 'Error', message: 'Resource not found'});
})

app.listen(process.env.PORT || 8080);

module.exports = app;