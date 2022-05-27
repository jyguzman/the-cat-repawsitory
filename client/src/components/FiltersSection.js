import Filter from './Filter';
import { Grid, Typography } from '@mui/material';

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
    return attribute.split('_').map(word => 
    	word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
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
            columns={{xs: 16, sm: 16, lg: 16}}
            >
                {
                    Object.keys(attributeFilters).map(filter => {
                        const key = filter
                        const value = attributeFilters[key]
                        return (
                            <Grid item container justifyContent='center' key={key} 
                                xs={12} sm={5} md={4} lg={4} xl={5}>
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