import { Grid, List, ListItem } from '@mui/material';
import StatRating from './StatRating';


const StatList = (props) => {
    const stats = props.stats;

    return (
        <Grid item container xs={8} sm={6} md={6} lg={6} xl={6} justify="center">
            <List > 
                {
                    stats.map((statType, index) => {
                        return (
                            <ListItem key={index}><StatRating stat={Object.keys(statType)} value={statType[Object.keys(statType)]}  /></ListItem>
                        )
                    })
                }
            </List>
        </Grid>
    );
}

export default StatList;