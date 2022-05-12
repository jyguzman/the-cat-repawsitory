const axios = require("axios");
const apiUrl = "https://api-dot-dogrepawsitory.uc.r.appspot.com"

const fetchBreedImages = async breedId => {
    let images = await axios.get(`/images/${breedId}`);
    return images.data;
}

const fetchMostSearched = async () => {
    const topTen = await axios.get(`/topDogs`);
    return topTen.data;
}

const updateSearchCount = async breedId => {
    await axios.put(`/updateSearchCount/${breedId}`);
        
}

module.exports = { fetchBreedImages, fetchMostSearched, updateSearchCount };