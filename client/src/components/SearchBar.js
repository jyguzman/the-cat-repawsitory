import { TextField, Autocomplete } from "@mui/material";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import BreedContext from '../contexts/BreedContext';
import updateSearchCount from "../utils/updateSearchCount";

const SearchBar = () => {
    const breeds = useContext(BreedContext).filter(breed => "image" in breed);
    const navigate = useNavigate();

    const handleBreedSearch = async (event, value) => {
      if (value) {
        await updateSearchCount(value.id);
        navigate('/' + value.name);
      }
    }
    return (
      <Autocomplete
        id="breed-search-bar"
        options={breeds}
        getOptionLabel={(breed) => breed.name}
        isOptionEqualToValue={(breed, value) => breed.id === value.id}
        onChange={(event, value) => handleBreedSearch(event, value)}
        renderInput={(params) => <TextField {...params} 
            label="Search breeds" variant="outlined" />}
      />
    );
}

export default SearchBar;