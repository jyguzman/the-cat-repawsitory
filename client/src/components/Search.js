import { Grid } from '@mui/material';
import SearchBar from "./SearchBar";
import SearchButtons from "./SearchButtons";
import AddFilterSearchBar from './AddFilterSearchBar';

const Search = (props) => {
    return (
        <Grid direction='column' container justify='center' alignItems='center' spacing={3}>
            <Grid item container justifyContent='center' alignItems='center' spacing={2} sx={{paddingTop: '5%'}}>
                <Grid item xs={9} sm={10} md={11} lg={12}>
                    <SearchBar handleBreedSearch={props.handleBreedSearch}/>
                </Grid>
                <Grid item xs={9} sm={10} md={11} lg={12}>
                    <AddFilterSearchBar addFilter={props.addFilter} attributesInUse={props.attributesInUse} />
                </Grid>
            </Grid> 
            <Grid item>
                <SearchButtons handleTopTenSearch={props.handleTopTenSearch}/>
            </Grid>
        </Grid>
    );
}

export default Search;