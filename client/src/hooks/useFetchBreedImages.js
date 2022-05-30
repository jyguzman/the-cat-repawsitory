import { useEffect, useState } from "react";

const axios = require("axios");
const url = "https://cat-repaws-api-56msqy2ita-uc.a.run.app"
const ENV = process.env.REACT_APP_NODE_ENV;

const useFetchBreedImages = breedId => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const retrieveImages = async () => {
            const images = await axios.get(
                `${ENV === 'production' ? url : ''}/images/${breedId}`
            );
            setImages(images.data.data);
        }
        retrieveImages();
    }, []);
    
    return images;
}

export default useFetchBreedImages;