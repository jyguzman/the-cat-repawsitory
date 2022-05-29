import { useContext } from 'react';
import AttributesContext from '../contexts/AttributesContext';
import StatList from './StatList';
import getFilterNameFromAttributeName from '../utils/getFilterNameFromAttributeName';

const CatStats = (props) => {
    const cat = props.cat;
    const attributes = useContext(AttributesContext);

    return (
        <StatList key="1" stats={[
            {"Vocalization": cat.vocalisation}, 
            {"Energy Level" : cat.energy_level},
            {"Intelligence" : cat.intelligence},
            {"Affection Level" : cat.affection_level},
            {"Friendliness with Dogs": cat.dog_friendly}, 
            {"Friendliness with Children" : cat.child_friendly},
            {"Friendliness with Strangers" : cat.stranger_friendly},
            {"Grooming Required" : cat.grooming},
        ]} />
    );
}
export default CatStats;