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
    const filterKeys = [{"Energy": "energy_level"}, 
        {"Affectionate": "affection_level"}, {"Grooming": "grooming"},
        {"Vocal": "vocalisation"}, {"Child Friendly": "child_friendly"}, 
        {"Dog Friendly": "dog_friendly"}]
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Typography sx={styles.typography} variant="h4">Filter Breeds</Typography>
            <Grid item container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                {
                    filterKeys.slice(0, 3).map(filter => {
                        const key = Object.keys(filter)[0]
                        const value = filter[key]
                        return (
                            <Grid item key={key}>
                                <Filter updateFilters={props.updateFilters} stat={key} filter={value} />
                            </Grid>
                        )
                    })
                }
                <Grid item container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    {
                        filterKeys.slice(3).map(filter => {
                            const key = Object.keys(filter)[0]
                            const value = filter[key]
                            return (
                                <Grid item key={key}>
                                    <Filter updateFilters={props.updateFilters} stat={key} filter={value} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
            {/*<Button sx={styles.button} color="primary" variant="contained" onClick={props.resetFilters}>Reset Filters</Button>*/}
        </Grid>
    );
}

export default FiltersSection;