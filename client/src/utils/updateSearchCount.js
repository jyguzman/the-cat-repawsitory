const axios = require("axios");
const updateSearchCount = async breedId => {
    await axios.put(`/breeds/update/search-count/${breedId}`);    
}

export default updateSearchCount;