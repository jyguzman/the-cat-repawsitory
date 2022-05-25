import { useContext, useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import Search from "./Search";
import BreedGallery from "./BreedGallery";
import FiltersSection from "./FiltersSection";
import BreedContext from "../contexts/BreedContext";
import axios from "axios";

const CatSearchPage = () => {   
    const breeds = useContext(BreedContext).filter(cat => 'image' in cat);;
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

    useEffect(() => {
        const getFiltered = async () => {
            const filtered = await axios.get('/filters', {
                params: (filters ? filters : {'energy_level': []})
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
                <Search/>
            </Grid>
            <Grid item>
                <FiltersSection filters={filters} updateFilters={updateFilters} />
            </Grid>
            <Grid item>
                <BreedGallery breeds={filteredBreeds}/>
            </Grid>
        </Grid>
    )
}

export default CatSearchPage;