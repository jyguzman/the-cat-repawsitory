import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const SearchButtons = () => {
    const navigate = useNavigate();
    
    return (
        <Grid container justify='center' alignItems='center'>
            <Grid item>
                <Button variant='contained' onClick={() => navigate('/popular')}>
                    Top Cats
                </Button>
            </Grid>
        </Grid>
    )
}

export default SearchButtons;