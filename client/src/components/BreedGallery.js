import { useContext, useState } from 'react';
import { Grid } from '@mui/material';
import ImageCard from './ImageCard' 
import BreedContext from '../contexts/BreedContext';

const BreedGallery = (props) => {
    //if (props.breeds && props.breeds.length > 0) {
    return (
        <Grid container item justifyContent="center" alignItems="center" spacing={3}>
            {  
                props.breeds.filter(cat => "image" in cat).map((cat, index) => {
                    return (
                        <ImageCard cat={cat} index={index} key={index} />
                    )
                })
            }
        </Grid> 
    );
      //  }
}

export default BreedGallery;