import { Route, Routes } from 'react-router-dom';
import TitleBar from './TitleBar';
import CatDetails from './CatDetails';
import CatSearchPage from './CatSearchPage';
import TopCats from './TopCats';

const MainPage = () => {
    return (
        <>
        <TitleBar/>
        <Routes>
            <Route exact path = '/' element={<CatSearchPage />} />
            <Route path = "/:name" element={<CatDetails />} />
            <Route path = "/popular" element={<TopCats />} />
        </Routes>
        </>
    );
}

export default MainPage;

