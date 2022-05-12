const axios = require("axios");
const apiUrl = "https://api-dot-dogrepawsitory.uc.r.appspot.com"
const fetchMostSearched = async () => {
    let topTen = null;
    if (process.env.NODE_ENV === "production") {
        topTen = await axios.get(`${apiUrl}/topDogs`);
    } else {
        topTen = await axios.get(`/topDogs`);
    }
    return topTen.data.data;
}

export default fetchMostSearched;