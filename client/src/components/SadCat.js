import BackButton from "./BackButton";
import { Typography, CardMedia, Grid } from "@mui/material";

const SadCat = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center"> 
            <Typography variant="h5" gutterBottom paragraph>Oh no! Did you get lost?</Typography>
            <CardMedia 
                component="img"
                src="/sad-cat.jpg"
                sx={{maxHeight: ['100%', '75%', '50%'],
                    maxWidth: ['100%', '75%', '50%'],
                    borderRadius: '10px'}}
            />
            <BackButton /> 
        </Grid>
    )
}

export default SadCat;