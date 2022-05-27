import React , { useContext } from 'react';
import Filter from './Filter';
import { Grid, Button, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import FiltersContext from '../contexts/FiltersContext';

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

const getFilterNameFromAttributeName = (attribute) => {
    const split = attribute.replace(/_/g,' ').split(' ')
    let result = ''
    for (let i = 0; i < split.length; i++) {
        result += split[i].charAt(0).toUpperCase() + split[i].slice(1) + ' '
    }
    return result.trim()
}

const FiltersSection = (props) => {
    const filters = props.filters;
    const attributeFilters = {}
    props.attributeFilters.map(attribute => {
        const name = getFilterNameFromAttributeName(attribute);
        attributeFilters[name] = attribute
    });
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Typography sx={styles.typography} variant="h4">Filter Breeds</Typography>
            <Grid container 
            justifyContent="center" 
            alignItems="center" 
            spacing={2}
            columns={16}>
                {
                    Object.keys(attributeFilters).map(filter => {
                        const key = filter
                        const value = attributeFilters[key]
                        return (
                            <Grid item key={key} md={5} lg={5} xl={5}>
                                <Filter deleteFilter={props.deleteFilter} updateFilters={props.updateFilters} stat={key} filter={value} filters={filters}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </Grid>
    );
}

export default FiltersSection;