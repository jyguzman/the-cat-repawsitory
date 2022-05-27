const axios = require("axios");
const fetchMostSearched = async () => {
    const topTen = await axios.get(`/breeds/popular`);
    return topTen.data.data;
}

export default fetchMostSearched;