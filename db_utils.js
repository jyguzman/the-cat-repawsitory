require("dotenv").config();
const axios = require('axios');
const { MongoClient, ServerApiVersion } = require('mongodb');
const URI = process.env.MONGODB_URI;

const connectToDB = () => {
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        if (err) console.log(err)
        else console.log('connected')
        client.close();
    })
}

const populateCollection = async () => {
    const allData = await axios.get("https://api.thedogapi.com/v1/breeds");
    const breeds = allData.data.map(breed => 
        ({ '_id': breed.id, name: breed.name, image: breed.image.url, searches: 0})
    );
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        if (err) console.log(err)
        else { 
            const db = client.db('dogs').collection('breeds')
            db.insertMany(breeds);
        }
    })
    client.close();
}