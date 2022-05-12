import { TextField, Autocomplete } from "@mui/material";
import { useContext } from 'react';
import BreedContext from '../contexts/BreedContext';

const SearchBar = (props) => {
    const breeds = useContext(BreedContext);
    return (
      <Autocomplete
        id="breed-search-bar"
        options={breeds}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={props.handleBreedSearch}
        renderInput={(params) => <TextField {...params} 
            label="Search breeds" variant="outlined" />}
      />
    );
}

export default SearchBar;