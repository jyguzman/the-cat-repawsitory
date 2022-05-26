import { useEffect, useState } from "react";
const axios = require("axios");

const useFetchBreedInfo = breedId => {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        console.log("kdlksdklslkdlk")
        const retrieveInfo = async () => {
            const info = await axios.get(`/breeds/${breedId}`);
            setInfo(info.data.data);
        }
        retrieveInfo();
    }, []);
    return info;
}

export default useFetchBreedInfo;