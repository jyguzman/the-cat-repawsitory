import { useContext } from 'react';
import { Grid } from '@mui/material';
import ImageCard from './ImageCard' 
import BreedContext from '../contexts/BreedContext';
import useFetchBreedInfo from '../hooks/useFetchBreedInfo';
const BreedGallery = (props) => {
    const breeds = useContext(BreedContext).filter(cat => 'image' in cat);    
    return (
        <Grid container item justify="center" alignItems="center" spacing={3}>
            {  
                breeds//.slice((page - 1) * perPage, page * perPage)
                .map((cat, index) => {
                    return (
                        <ImageCard cat={cat} index={index} key={index} />
                    )
                })
            }
        </Grid> 
    );
}

export default BreedGallery;