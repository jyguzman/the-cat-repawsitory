require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const apiBaseUrl = "https://api.thedogapi.com/v1";
const key = process.env.APIKEY;
const path = require('path');
const app = express();
app.use(
	express.urlencoded({
		extended: true
	})
);
//app.use(express.bodyParser());

app.get('/breeds/all', (req, res) => {
    const url = `${apiBaseUrl}/breeds`;
    axios.get(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
})

app.get('/top', (req, res) => {
    
})

app.listen(3001, '127.0.0.1');