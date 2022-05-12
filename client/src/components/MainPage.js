import { useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import Search from './Search';
import Gallery from './Gallery';
import TopDogs from './TopDogs';
import fetchBreedImages from '../utils/fetchBreedImages';
import fetchMostSearched from '../utils/fetchMostSearched';
import updateSearchCount from '../utils/updateSearchCount';
import Appbar from './Appbar';

const MainPage = () => {
    const [images, setImages] = useState([]);
    const [topTen, setTopTen] = useState([]);
    const [showTopTen, setShowTopTen] = useState(false);
    const [showImages, setShowImages] = useState(false);
    
    const handleBreedSearch = (event, value) => {
        if (value) {
            setImages(null);
            setShowTopTen(false);
            setShowImages(true);
            updateSearchCount(value.id);
            setImages(fetchBreedImages(value.id));
        }
    } 

    const handleTopTenSearch = () => {
        setTopTen(null);
        setShowImages(false);
        setShowTopTen(true);
        setTopTen(fetchMostSearched());
    }
    return (
        <>
        <Appbar/>
        <Grid direction='column' justify='center' alignItems='center' container spacing={2}>
            <Grid justify='center' alignItems='center' item sx={{ 
                paddingTop: '25%',
                width: ['100%', '75%', '50%', '35%']
            }}>
                <Search handleTopTenSearch={handleTopTenSearch} handleBreedSearch={handleBreedSearch}/>
            </Grid>
            <Grid item>
                {(showImages) ? (images ? <Gallery pics={images}/> : <CircularProgress/>) : null}
            </Grid>
            <Grid item>
                {(showTopTen) ? (topTen ? <TopDogs topTen={topTen}/> : <CircularProgress/>) : null}
            </Grid>
        </Grid>
        </>
    );
}

export default MainPage;

