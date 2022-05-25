const axios = require("axios");
const fetchMostSearched = async () => {
    let topTen = null;
    topTen = await axios.get(`/breeds/popular`);
    return topTen.data.data;
}

export default fetchMostSearched;