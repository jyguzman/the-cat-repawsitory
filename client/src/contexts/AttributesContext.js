import { createContext } from 'react';

const AttributesContext = createContext(
    ["energy_level", "affection_level", "grooming",
    "vocalisation", "child_friendly", "dog_friendly"]
);

export default AttributesContext;