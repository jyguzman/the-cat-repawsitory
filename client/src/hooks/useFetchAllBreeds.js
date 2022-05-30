import { useState, useEffect } from "react";
const axios = require('axios');
const url = "https://cat-repaws-api-56msqy2ita-uc.a.run.app"
const ENV = process.env.REACT_APP_NODE_ENV;

const useFetchAllBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        const fetchBreeds = async () => {
            axios.get(`${ENV === 'production' ? url : ''}/breeds/all`)
              .then(breeds => setBreeds(breeds.data.data))
              .catch(err => console.log(err));
          }
        fetchBreeds();
    }, []);
      
    return breeds;
}
export default useFetchAllBreeds