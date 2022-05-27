import { useContext } from 'react';
import AttributesContext from '../contexts/AttributesContext';
import StatList from './StatList';

const getFilterNameFromAttributeName = (attribute) => {
    const split = attribute.replace(/_/g,' ').split(' ')
    let result = ''
    for (let i = 0; i < split.length; i++) {
        result += split[i].charAt(0).toUpperCase() + split[i].slice(1) + ' '
    }
    return result.trim()
}

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