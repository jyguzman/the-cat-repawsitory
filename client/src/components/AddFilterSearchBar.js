import { TextField, Autocomplete } from "@mui/material";

const allAttributes = ["energy_level", "affection_level", "grooming",
"vocalisation", "child_friendly", "dog_friendly", "health_issues",
"intelligence", "shedding_level","social_needs",
"stranger_friendly"
];

const getFilterNameFromAttributeName = (attribute) => {
    const split = attribute.replace(/_/g,' ').split(' ')
    let result = ''
    for (let i = 0; i < split.length; i++) {
        result += split[i].charAt(0).toUpperCase() + split[i].slice(1) + ' '
    }
    return result.trim()
}

const AddFilterSearchBar = (props) => {
    const attributesInUse = props.attributesInUse;
    const options = allAttributes
    .filter(attribute => !attributesInUse.includes(attribute))
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