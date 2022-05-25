import { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Divider } from '@mui/material';
import LearnMoreButton from './LearnMoreButton';
const ImageCard = ( props )  => {
    const cat = props.cat;
    if (!('image' in cat))
        console.log(cat)
    return (
        <Grid item container justify="center" xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card>            
                <CardMedia
                    component="img"
                    src={cat.image.url}
                />
                <CardContent>
                    <Typography variant="h5" paragraph gutterBottom>{cat.name}</Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>{cat.temperament}</Typography>
                </CardContent>
                <Divider variant="middle"/>
                <CardActions>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item><LearnMoreButton cat={cat} /></Grid>
                    </Grid>
                </CardActions>
            </Card>            
        </Grid>
    );
}

export default ImageCard