require("dotenv").config();
const axios = require('axios');
const { MongoClient, ServerApiVersion } = require('mongodb');
const URI = process.env.MONGODB_URI;

const populateCollection = async () => {
    const allData = await axios.get("https://api.thecatapi.com/v1/breeds");
    const breeds = allData.data;
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        if (err) console.log(err)
        else { 
            const db = client.db('cats').collection('breeds')
            db.insertMany(breeds);
        }
    })
    client.close();
}