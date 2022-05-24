import { useContext } from "react";
import { Grid } from "@mui/material";
import Search from "./Search";
import BreedGallery from "./BreedGallery";
import { useNavigate } from "react-router-dom";

const CatSearchPage = () => {
    const navigate = useNavigate();
    const handleBreedSearch = (event, value) => {
        if (value) {
            navigate('/' + value.id);
        }
    } 

    return (
        <Grid direction='column' justify='center' alignItems='center' container spacing={2}>
            <Grid justify='center' alignItems='center' item sx={{ 
                paddingTop: '25%',
                width: ['100%', '75%', '50%', '35%']
            }}>
                <Search handleBreedSearch={handleBreedSearch}/>
            </Grid>
            <Grid item>
                <BreedGallery/>
            </Grid>
        </Grid>
    )
}

export default CatSearchPage;