import { Grid, Box, Typography, Rating } from '@mui/material';

const styles = {
    typography: {
        textAlign: "center"
    },
};


const StatRating = (props) => {
    return (
        <Grid item container direction="column" justify="center">
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography sx={styles.typography} component="legend">{props.stat}</Typography>
                <Rating
                name="customized-empty"
                defaultValue={props.value}
                size="large"
                readOnly
                />
            </Box>
        </Grid>
    );
}

export default StatRating;