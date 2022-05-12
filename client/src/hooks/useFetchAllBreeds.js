import { useState, useEffect } from "react";
const axios = require('axios');
const apiUrl = "https://api-dot-dogrepawsitory.uc.r.appspot.com"

const useFetchAllBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const env = process.env.NODE_ENV;
    useEffect(() => {
        const fetchBreeds = async () => {
            axios.get(`${(env === 'production' ? apiUrl : '')}/breeds/all`)
              .then(breeds => setBreeds(breeds.data))
              .catch(err => console.log(err));
          }
        fetchBreeds();
    }, []);
      
    return breeds;
}
export default useFetchAllBreeds