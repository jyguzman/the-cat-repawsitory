import { Grid } from '@mui/material';
import StatRating from './StatRating';


const StatList = (props) => {
    const stats = props.stats;
    return (
        <Grid item container 
        columns={{xs: 3, sm: 4, md: 3, lg:5}} 
        xs={12} sm={16} md={12} lg={6}
        justifyContent="center" 
        alignItems='center'>
                {
                    stats.map((statType, index) => {
                        return (
                            <StatRating key={index} stat={Object.keys(statType)} value={statType[Object.keys(statType)]}  />
                        )
                    })
                }
        </Grid>
    );
}

export default StatList;