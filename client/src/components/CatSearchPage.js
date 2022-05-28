import { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Search from "./Search";
import BreedGallery from "./BreedGallery";
import FiltersSection from "./FiltersSection";
import BreedContext from "../contexts/BreedContext";
import axios from "axios";
import AttributesContext from "../contexts/AttributesContext";

const CatSearchPage = () => {   
    const breeds = useContext(BreedContext).filter(cat => 'image' in cat);;
    const attributes_ = useContext(AttributesContext);
    const [attributeFilters, setAttributeFilters] = useState(attributes_)
    const [filters, setFilters] = useState(null);
    const [filteredBreeds, setFilteredBreeds] = useState(breeds);
    
    const updateFilters = (filter, num) => {
        if (!filters || !(filter in filters) ) {
            setFilters((prev) => ({...prev,[filter]: [num]}));
            return;
        }
        let values = filters[filter];
        if (values.includes(num)) {
            values = values.filter(value => value !== num);
        } else {
            values.push(num);
        }
        setFilters((prev) => ({...prev, [filter]: values}));
    }

    const deleteFilter = (filter) => {
        setAttributeFilters(attributeFilters.filter(attr => attr !== filter))
        if (filters && filter in filters) {
            const filtersCopy = JSON.parse(JSON.stringify(filters))
            delete filtersCopy[filter]
            setFilters(filtersCopy)
        }
    }

    const addFilter = (event, filter) => {
        if (filter)
            setAttributeFilters([...attributeFilters, filter]);
    }

    useEffect(() => {
        const getFiltered = async () => {
            const filtered = await axios.get('/breeds', {
                params: (filters ?? {})
            })
            setFilteredBreeds(filtered.data.data);
        }
        getFiltered();
    }, [filters])

    return (
        <Grid direction='column' justify='center' alignItems='center' container spacing={2}>
            <Grid justify='center' alignItems='center' item sx={{ 
                paddingTop: '25%',
                width: ['100%', '75%', '50%', '35%']
            }}>
                <Search addFilter={addFilter} attributesInUse={attributeFilters}/>
            </Grid>
            <Grid item>
                <FiltersSection deleteFilter={deleteFilter} attributeFilters={attributeFilters} filters={filters} updateFilters={updateFilters} />
            </Grid>
            <Grid item>
                {filteredBreeds && filteredBreeds.length > 0  
                    ? <BreedGallery breeds={filteredBreeds}/> 
                    : <Typography>No results.</Typography>}
            </Grid>
        </Grid>
    )
}

export default CatSearchPage;