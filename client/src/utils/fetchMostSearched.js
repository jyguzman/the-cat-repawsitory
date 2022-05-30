const axios = require("axios");
const url = "https://cat-repaws-api-56msqy2ita-uc.a.run.app"
const ENV = process.env.REACT_APP_NODE_ENV;

const fetchMostSearched = async () => {
    const topTen = await axios.get(
        `${ENV === 'production' ? url : ''}/breeds/popular`
    );
    return topTen.data.data;
}

export default fetchMostSearched;