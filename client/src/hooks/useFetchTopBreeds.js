import { useEffect, useState } from "react";
import fetchMostSearched from "../utils/fetchMostSearched";
const axios = require("axios");

const useFetchTopBreeds = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const getPopular = async () => {
            const topTen = await fetchMostSearched(); //await axios.get(`/breeds/popular`);
            setPopular(topTen);
        }
        getPopular();
    }, [])

    return popular;
}

export default useFetchTopBreeds;