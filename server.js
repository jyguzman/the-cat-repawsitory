require("dotenv").config();
const express = require("express");
const cors = require('cors');
const axios = require("axios");
const { MongoClient, ServerApiVersion } = require('mongodb');
const apiBaseUrl = "https://api.thedogapi.com/v1";
const key = process.env.API_KEY;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

let db = null;

MongoClient.connect(process.env.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db('dogs').collection('breeds');
});

app.get('/', (req, res) => {
    res.status(200).send("Hello world!")
})

app.get('/breeds/all', (req, res) => {
    const url = `${apiBaseUrl}/breeds`;
    axios.get(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(response => res.status(200).json(response.data))
    .catch(err => {
        res.status(404).send('Error retrieving all breeds.');
    });
})

app.get('/images/:breedId', (req, res) => {
    const breedId = req.params.breedId;
    const url = `${apiBaseUrl}/images/search?breed_id=${breedId}&limit=50`;
    axios.get(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(response => res.json(response.data))
    .catch(err => res.json({status:'error', message:`Error retrieving images for breed with id ${breedId}`}));
})

app.put('/updateSearchCount/:breedId', (req, res) => {
    db.updateOne(
        { '_id' : parseInt(req.params.breedId) },
        { $inc : { 'searches' : 1 } }
    ).then(result => {
        res.json({message:'success'})
    });
})

app.get('/topDogs', (req, res) => {
    db.find().sort( { searches : -1} ).limit(10).toArray().then(topTen => res.json(topTen));
})

app.listen(process.env.PORT || 8080);