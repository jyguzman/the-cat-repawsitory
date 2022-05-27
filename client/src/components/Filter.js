import React, { useState } from 'react';
import { Grid, Typography, Button, ButtonGroup, Stack } from '@mui/material';

const Filter = (props) => {  
    const filters = props.filters;
    const filter = props.filter;
    const state = filters ? (filter in filters ? filters[filter] : []) : [] 
    const [filterState, setFilterState] = useState(state);

    const handleClick = (num) => {
        props.updateFilters(filter, num);
        if (filterState.includes(num)) {
            const removed = filterState.filter(n => n !== num)
            setFilterState(removed);
            return;
        }
        setFilterState([...filterState, num]);
    }

    return (    
        <Stack direction='row'>
            <Stack justifyContent='center' alignItems='center' direction="column">
                <Grid item>
                    <Typography sx={{textAlign: 'center'}} component="legend">{props.stat}</Typography>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    <ButtonGroup>
                        {[1,2,3,4,5].map(num => {
                            return (
                                <Button key={num} 
                                variant="contained"
                                onClick = {() => handleClick(num)}
                                color={filterState.includes(num) ? 'primary' : 'inherit'}
                                >{num}</Button>
                            )
                        })}
                    </ButtonGroup>
                </Grid>
            </Stack>
            <Button sx={{margin: 0}} onClick={() => props.deleteFilter(filter)}>x</Button>
        </Stack>
    );
}
export default Filter;

