import { useEffect, useState } from "react";
const axios = require("axios");

const useFetchBreedInfo = breedId => {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        const retrieveInfo = async () => {
            const info = await axios.get(`/breeds/${breedId}`);
            setInfo(info.data.data);
        }
        
        retrieveInfo();
    }, [breedId]);
    return info;
}

export default useFetchBreedInfo;