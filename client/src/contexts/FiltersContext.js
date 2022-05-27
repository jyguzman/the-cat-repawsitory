import { createContext } from 'react';

const FiltersContext = createContext(
    ["energy_level", "affection_level", "grooming",
    "vocalisation", "child_friendly", "dog_friendly"]
);

export default FiltersContext;