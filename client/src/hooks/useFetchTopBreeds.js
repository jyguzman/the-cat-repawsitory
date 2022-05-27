import { useEffect, useState } from "react";
import fetchMostSearched from "../utils/fetchMostSearched";

const useFetchTopBreeds = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const getPopular = async () => {
            const topTen = await fetchMostSearched(); 
            setPopular(topTen);
        }
        getPopular();
    }, [])

    return popular;
}

export default useFetchTopBreeds;