import { Grid, Box, Typography, Rating, Stack } from '@mui/material';

const styles = {
    typography: {
        textAlign: "center"
    },
};

const StatRating = (props) => {
    return (
        <Stack justifyContent='center' alignItems='center'>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography sx={styles.typography} component="legend">{props.stat}</Typography>
                <Rating
                name="customized-empty"
                defaultValue={props.value}
                size="large"
                readOnly
                />
            </Box>
        </Stack>
    );
}

export default StatRating;