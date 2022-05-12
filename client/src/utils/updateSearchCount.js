const axios = require("axios");
const apiUrl = "https://api-dot-dogrepawsitory.uc.r.appspot.com"
const updateSearchCount = async breedId => {
    if (process.env.NODE_ENV === "production")
        await axios.put(`${apiUrl}/updateSearchCount/${breedId}`);
    else
        await axios.put(`/updateSearchCount/${breedId}`);
        
}

export default updateSearchCount;