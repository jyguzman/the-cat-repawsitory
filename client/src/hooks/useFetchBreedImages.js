import { useEffect, useState } from "react";

const axios = require("axios");

const useFetchBreedImages = breedId => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const retrieveImages = async () => {
            const images = await axios.get(`/images/${breedId}`);
            setImages(images.data.data);
        }
        retrieveImages();
    }, []);
    
    return images;
}

export default useFetchBreedImages;