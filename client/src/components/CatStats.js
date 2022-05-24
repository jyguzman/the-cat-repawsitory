import React from 'react';
import { Grid } from '@mui/material';
import StatList from './StatList';

const styles = {
    list: {
        paddingLeft: "20px",
        width: "100%",
    },
};

const CatStats = (props) => {
    const cat = props.cat;
    //const stats = cat
    return (
        <Grid item container direction="row" justifyContent="center" alignItems='center' sx={styles.list} xs={12} sm={12} md={12} lg={12}>
            <Grid item>
                <StatList key="1" stats={[
                    {"Vocalization": cat.vocalisation}, 
                    {"Energy Level" : cat.energy_level},
                    {"Intelligence" : cat.intelligence},
                    {"Affection Level" : cat.affection_level}
                ]} />
            </Grid>
            <Grid item>
                <StatList key="2" stats={[
                    {"Friendliness with Dogs": cat.dog_friendly}, 
                    {"Friendliness with Children" : cat.child_friendly},
                    {"Friendliness with Strangers" : cat.stranger_friendly},
                    {"Grooming Required" : cat.grooming},
                ]} />
            </Grid>
        </Grid>
    );
}

export default CatStats;