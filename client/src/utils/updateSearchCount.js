const axios = require("axios");
const url = "https://cat-repaws-api-56msqy2ita-uc.a.run.app"
const ENV = process.env.REACT_APP_NODE_ENV;

const updateSearchCount = async breedId => {
    await axios.put(
        `${ENV === 'production' ? url : ''}/breeds/update/search-count/${breedId}`
    );    
}

export default updateSearchCount;