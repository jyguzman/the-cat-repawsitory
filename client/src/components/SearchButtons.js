import { Button, Grid } from "@mui/material";

const SearchButtons = (props) => {
    return (
        <Grid container justify='center' alignItems='center'>
            <Grid item>
                <Button variant='contained'
                onClick={props.handleTopTenSearch}>Top Dogs</Button>
            </Grid>
        </Grid>
    )
}

export default SearchButtons;