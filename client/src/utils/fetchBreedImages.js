const axios = require("axios");
const apiUrl = "https://api-dot-dogrepawsitory.uc.r.appspot.com"

const fetchBreedImages = async breedId => {
    let images = null;
    if (process.env.NODE_ENV === "production") {
        images = await axios.get(`${apiUrl}/images/${breedId}`);
    } else {
        images = await axios.get(`/images/${breedId}`);
        console.log(images.data)
    }
    return images.data.data;
}

export default fetchBreedImages;