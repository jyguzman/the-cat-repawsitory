import { useState } from "react";
import { Grid } from "@mui/material";
import Search from "./Search";
import BreedGallery from "./BreedGallery";
import { useNavigate } from "react-router-dom";
import TopCats from "./TopCats";
import fetchMostSearched from "../utils/fetchMostSearched";

const CatSearchPage = () => {
    const [topTen, setTopTen] = useState([]);
    const [showTop, setShowTop] = useState(false);
    const [showBreeds, setShowBreeds] = useState(true);

    const navigate = useNavigate(); 

    const handleTopTenSearch = async () => {
        /*setTopTen(await fetchMostSearched());
        setShowTop(true);
        setShowBreeds(false);*/

        navigate('/popular')
    }

    return (
        <Grid direction='column' justify='center' alignItems='center' container spacing={2}>
            <Grid justify='center' alignItems='center' item sx={{ 
                paddingTop: '25%',
                width: ['100%', '75%', '50%', '35%']
            }}>
                <Search handleTopTenSearch={handleTopTenSearch}/>
            </Grid>
            {showBreeds ? <Grid item>
                <BreedGallery/>
            </Grid> : null}
            {topTen && showTop ? <TopCats topTen={topTen}/> : null}
        </Grid>
    )
}

export default CatSearchPage;