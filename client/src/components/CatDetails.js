import { Container, CardMedia, Button, Paper, Grid, Typography } from '@mui/material';
import CatStats from './CatStats';
import Gallery from './Gallery';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchBreedImages from '../hooks/useFetchBreedImages';
import BreedContext from '../contexts/BreedContext';
import { useContext } from 'react';
import useFetchBreedInfo from '../hooks/useFetchBreedInfo';
const styles = {
    paper: {
        padding: "30px",
        borderRadius: "20px",
    },
    media: {
        maxWidth: "550px",
        maxHeight: "550px",
        marginBottom: "15px",
        borderRadius: "15px",
    },
    typography: {
        maxWidth: "450px",
        textAlign: "center",
        paddingBottom: "20px"
    },
    list: {
        paddingLeft: "20px",
        maxWidth: "320px",
    },
};

const CatDetails = () => {
    const { id } = useParams();
    const cat = useContext(BreedContext).filter(cat => cat.id === id)[0];
    console.log(cat)
    const images = useFetchBreedImages(id);
    const navigate = useNavigate();
    if (cat) {
        return ( 
            <Container key="container">
                <Paper elevation={8} sx={styles.paper}>
                    <Grid item container direction="row" justifyContent="center" alignItems="center" sx={styles.content} key="grid" sm={12} md={12} lg={12} xl={12}>
                        <Grid item container direction="column" justifyContent="center" alignItems="center" key="mediagrid" sm={12} md={12} lg={6} xl={6}>
                            <Grid item>
                                <CardMedia sx={styles.media}
                                    component="img"
                                    src={cat.image.url}
                                    key="image"
                                    />
                            </Grid>
                            <Typography sx={styles.typography} variant="body1" key="description">{cat.description}</Typography> 
                        </Grid>
                        <Grid item sm={6}>
                            <CatStats cat={cat} key={cat.name}/> 
                        </Grid>                   
                    </Grid>
                    <Gallery images={images} key={cat.id}/>
                    <Button onClick={() => navigate('/')} key="button">
                        Back
                    </Button>
                </Paper>
            </Container>
        );
    }
}

export default CatDetails;