import { useState, useEffect } from "react";
const axios = require('axios');

const useFetchAllBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        const fetchBreeds = async () => {
            axios.get(`/breeds/all`)
              .then(breeds => setBreeds(breeds.data.data))
              .catch(err => console.log(err));
          }
        fetchBreeds();
    }, []);
      
    return breeds;
}
export default useFetchAllBreeds