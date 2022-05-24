import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import BreedContext from '../contexts/BreedContext';

const LearnMoreButton = (props) => {
    const navigate = useNavigate();
    return (
        <Grid container justify="center">
            <Button variant="contained" 
                color="primary" 
                onClick={() => navigate("/"+ props.cat.id)}>
                Learn More
            </Button>
        </Grid>
    );
}

export default LearnMoreButton;