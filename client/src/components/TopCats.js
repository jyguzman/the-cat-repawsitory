import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import useFetchTopBreeds from "../hooks/useFetchTopBreeds";
import BackButton from "./BackButton";

const TopCats = () => {
    const topTen = useFetchTopBreeds();
    if (topTen) {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <BackButton />
            <Grid item container spacing={2}>
            {topTen.map(breed => {
                const image = breed.image.url;
                const name = breed.name;
                const searches = breed.searches;
                return (
                    <Grid key={breed['_id']} item sm={6} md={4} lg={4} xl={3}>
                        <Card>
                            <CardMedia
                                component='img'
                                image={image}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="subtitle1" 
                                    component="h6">
                                    {name}: {(searches === 1 ? '1 search' : `${searches} searches`)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
            </Grid>
        </Grid>
    );
    }
}

export default TopCats;