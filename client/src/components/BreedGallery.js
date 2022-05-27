import { Grid } from '@mui/material';
import ImageCard from './ImageCard' 

const BreedGallery = (props) => {
    const breeds = props.breeds;
    return (
        <Grid container item justifyContent="center" alignItems="center" spacing={3}>
            {  
                breeds.filter(cat => "image" in cat).map((cat, index) => {
                    return (
                        <ImageCard cat={cat} index={index} key={index} />
                    )
                })
            }
        </Grid>
    );
}

export default BreedGallery;