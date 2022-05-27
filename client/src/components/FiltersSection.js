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

const FiltersSection = (props) => {
    const filters = props.filters;
    const attributeFilters = useContext(FiltersContext);
    const numFilters = attributeFilters.length;
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Typography sx={styles.typography} variant="h4">Filter Breeds</Typography>
            <Grid container 
            justifyContent="center" 
            alignItems="center" 
            spacing={1}
            columns={16}>
                {
                    attributeFilters.map(filter => {
                        const key = Object.keys(filter)[0]
                        const value = filter[key]
                        return (
                            <Grid item key={key} md={5} lg={5} xl={5}>
                                <Filter updateFilters={props.updateFilters} stat={key} filter={value} filters={filters}/>
                            </Grid>
                        )
                    })
                }
                {/*<Grid item container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    {
                        attributeFilters.slice(3).map(filter => {
                            const key = Object.keys(filter)[0]
                            const value = filter[key]
                            return (
                                <Grid item key={key}>
                                    <Filter updateFilters={props.updateFilters} stat={key} filter={value} filters={filters}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>*/}
            </Grid>
            
        </Grid>
    );
}

export default FiltersSection;