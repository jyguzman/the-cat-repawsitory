import MainPage from './components/MainPage';
import BreedContext from './contexts/BreedContext';
import useFetchAllBreeds from './hooks/useFetchAllBreeds';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const breeds = useFetchAllBreeds();
  return (
    <BreedContext.Provider value={breeds}>
      <Router>
        <MainPage/>
      </Router>
    </BreedContext.Provider>
  );
}

export default App;
