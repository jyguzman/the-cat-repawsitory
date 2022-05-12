import { Grid } from '@mui/material';
import SearchBar from "./SearchBar";
import SearchButtons from "./SearchButtons";

const Search = (props) => {
    return (
        <Grid direction='column' container justify='center' alignItems='center' spacing={3}>
            <Grid item sx={{width: '100%'}}>
                <SearchBar handleBreedSearch={props.handleBreedSearch}/>
            </Grid>
            <Grid item>
                <SearchButtons handleTopTenSearch={props.handleTopTenSearch}/>
            </Grid>
        </Grid>
    );
}

export default Search;