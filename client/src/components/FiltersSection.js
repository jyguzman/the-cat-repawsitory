import React , { useState } from 'react';
import Filter from './Filter';
import { Grid, Button, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    typography: {
        paddingBottom: "15px"
    },
    button: {
        marginTop: "25px",
        marginBottom: "25px"
    },
    accordion: {
        boxShadow: "none",
        backgroundColor: "#F5F5F5",
        border: "none",
        "&.MuiAccordion-root::before": {
            display: 'none'
        }
    },
};

const FiltersSection = (props) => {
    let filters = props.filters;
    const filteKeys = ["energy_level, affection_level, grooming"]
    return (
        <Grid container justify="center" alignItems="center">
            <Typography sx={styles.typography} variant="h4">Filter Breeds</Typography>
            <Grid item container direction="column" justify="center" alignItems="center" spacing={1}>
                <Grid container item direction="row" justify="center" alignItems="center" xs={12} sm={12} md={12} lg={12} >
                    <Grid item>
                        <Filter filterCats={props.filterCats} updateFilters={props.updateFilters} stat={"Energy Level"} filter={"energy_level"} filters={filters} />
                    </Grid>
                    <Grid item>
                        <Filter filterCats={props.filterCats} updateFilters={props.updateFilters} stat={"Affection Level"} filter={"affection_level"} filters={filters} />
                    </Grid>
                    <Grid item>
                        <Filter filterCats={props.filterCats} updateFilters={props.updateFilters} stat={"Grooming Requirements"} filter={"grooming"} filters={filters }/>
                    </Grid>
                </Grid>

                {/*<Grid item container justify="center" xs={12}>
                            <Grid container item direction="row" justify="center" alignItems="center" xs={12} sm={12} md={12} lg={12}>
                                <Grid item >
                                    <Filter filterCats={props.filterCats} reset={props.reset} updateFilters={props.updateFilters} stat={"Vocality"} filter={"vocalisation"} filters={filters} />
                                </Grid>
                                <Grid item>
                                    <Filter filterCats={props.filterCats} reset={props.reset} updateFilters={props.updateFilters} stat={"Friendliness with Children"} filter={"child_friendly"} filters={filters}  />
                                </Grid>
                                <Grid item>
                                    <Filter filterCats={props.filterCats} reset={props.reset}  updateFilters={props.updateFilters} stat={"Friendliness with Dogs"} filter={"dog_friendly"} filters={filters} />
                                </Grid>
                            </Grid>
                </Grid>*/}

            </Grid>
            {/*<Button sx={styles.button} color="primary" variant="contained" onClick={props.resetFilters}>Reset Filters</Button>*/}
        </Grid>
    );
}

export default FiltersSection;