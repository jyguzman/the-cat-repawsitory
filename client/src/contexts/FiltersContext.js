import { createContext } from 'react';

const FiltersContext = createContext([
    {"Energy Level": "energy_level"}, 
    {"Affection Level": "affection_level"}, 
    {"Grooming": "grooming"}, {"Vocal": "vocalisation"}, 
    {"Child Friendliness": "child_friendly"}, 
    {"Dog Friendliness": "dog_friendly"}
]);

export default FiltersContext;