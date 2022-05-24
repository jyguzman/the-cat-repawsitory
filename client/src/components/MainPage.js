import { Route, Routes } from 'react-router-dom';
import TitleBar from './TitleBar';
import CatDetails from './CatDetails';
import CatSearchPage from './CatSearchPage';

const MainPage = () => {
    return (
        <>
        <TitleBar/>
        <Routes>
            <Route exact path = '/' element={<CatSearchPage />} />
            <Route exact path = "/:id" element={<CatDetails />} />
        </Routes>
        </>
    );
}

export default MainPage;

