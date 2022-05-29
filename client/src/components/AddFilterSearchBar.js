import { TextField, Autocomplete } from "@mui/material";
import { useContext } from "react";
import AttributesContext from "../contexts/AttributesContext";
import getFilterNameFromAttributeName from "../utils/getFilterNameFromAttributeName";

const AddFilterSearchBar = (props) => {
    const allAttributes = useContext(AttributesContext)
    const attributesInUse = props.attributesInUse;
    const options = allAttributes.filter(attribute => !attributesInUse.includes(attribute))
    return (
      <Autocomplete
        id="breed-search-bar"
        options={options}
        getOptionLabel={(option) => getFilterNameFromAttributeName(option)}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(event, value) => { props.addFilter(event, value); value = ""; }}
        renderInput={(params) => <TextField {...params} 
            label="Add a filter" variant="outlined" />}
      />
    );
}

export default AddFilterSearchBar;