import { createContext } from 'react';

const AttributesContext = createContext(
    ["energy_level", "affection_level", "grooming",
    "vocalisation", "child_friendly", "dog_friendly", 
    "health_issues", "intelligence", "shedding_level",
    "social_needs", "stranger_friendly"]
);

export default AttributesContext;