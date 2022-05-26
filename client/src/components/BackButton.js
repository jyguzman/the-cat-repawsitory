import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Grid item container justifyContent='center'
            alignItems='center' 
            sx={{paddingTop: '1.5%', paddingBottom: '2%'}}>
            <Button 
                onClick={() => navigate('/')} 
                variant='contained'
                key="button">
                Home
            </Button>
        </Grid>
    )
}

export default BackButton;