import { Container, CardMedia, Paper, Grid, Typography } from '@mui/material';
import CatStats from './CatStats';
import Gallery from './Gallery';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetchBreedImages from '../hooks/useFetchBreedImages';
import BreedContext from '../contexts/BreedContext';
import BackButton from './BackButton';
import { useContext } from 'react';
import SadCat from './SadCat';

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

const getIdFromName = name => {
    name = name.toLowerCase();
    const splitName = name.split(/[- ]/);
    if (splitName.length === 1 || splitName.length === 3)
        return name.slice(0, 4);
    if (splitName.length === 2)
        return name.slice(0, 1) + splitName[1].slice(0,3);
}

const CatDetails = () => {
    const location = useLocation();
    const name = location.pathname.slice(1);
    const id = location.state?.id ?? getIdFromName(name);    
    const cat = useContext(BreedContext).filter(cat => cat.id === id)[0];
    const images = useFetchBreedImages(id);

    if (cat) {
        return ( 
            <Container key="container">
                <Grid container justifyContent={"center"}>
                <BackButton/>
                </Grid>
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
                    <Grid item container justifyContent={"center"}>
                    <BackButton />
                    </Grid>
                </Paper>
            </Container>
        );
    }
    return (
        <SadCat />
    )
}

export default CatDetails;