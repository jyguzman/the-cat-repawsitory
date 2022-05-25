import { Button, Grid } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import updateSearchCount from '../utils/updateSearchCount';

const LearnMoreButton = (props) => {
    const navigate = useNavigate();
    const handleClick = async () => {
        await updateSearchCount(props.cat.id);
        navigate("/"+ props.cat.id);
    }
    return (
        <Grid container justify="center">
            <Button variant="contained" 
                color="primary" 
                onClick={() => handleClick()}>
                Learn More
            </Button>
        </Grid>
    );
}

export default LearnMoreButton;