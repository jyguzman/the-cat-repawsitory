import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button, ButtonGroup } from '@mui/material';

const Filter = (props) => {  
    const filters = props.filters;
    const filter = props.filter;
    const [filterState, setFilterState] = useState(filters ? filters[filter] : []);

    const handleClick = (num) => {
        props.updateFilters(filter, num);
        if (filterState.includes(num)) {
            const removed = filterState.filter(n => n !== num)
            setFilterState(removed);
            return;
        }
        setFilterState([...filterState, num]);
        console.log(filter, filterState)
    }
    return (    
        <Grid item container direction="column" justify="center">
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Grid item container direction="column">
                    <Grid item>
                        <Typography component="legend">{props.stat}</Typography>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                        <ButtonGroup>
                            {[1,2,3,4,5].map(num => {
                                return (
                                    <Button key={num} 
                                    variant="contained"
                                    onClick = {() => handleClick(num)}
                                    color={filterState.includes(num) ? 'primary' : 'secondary'}
                                    >{num}</Button>
                                )
                            })}
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
export default Filter;

