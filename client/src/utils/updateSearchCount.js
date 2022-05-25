const axios = require("axios");
const updateSearchCount = async breedId => {
    await axios.put(`/update/increment/${breedId}`);    
}

export default updateSearchCount;