import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Search from "./Search";
import BreedGallery from "./BreedGallery";
import FiltersSection from "./FiltersSection";

const CatSearchPage = () => {   
    const [filters, setFilters] = useState(null);
    const updateFilters = (filter, num) => {
        if (!filters || !(filter in filters) ) {
          setFilters((prev) => ({
            ...prev,
            [filter]: [num]
          }));
        } else {
            let values = filters[filter];
            if (values.includes(num)) {
                values = values.filter(value => value !== num);
            } else {
                values.push(num);
            }
            setFilters((prev) => ({
              ...prev,
              [filter]: values
            }));
        }
      }

      useEffect(() => {
        console.log(filters);
      }, [filters])
    /*const updateFilters = (filters) => {
        setFilters(filters);
        console.log(filters)
    }*/
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
                <BreedGallery/>
            </Grid>
        </Grid>
    )
}

export default CatSearchPage;