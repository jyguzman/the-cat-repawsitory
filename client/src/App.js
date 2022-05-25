import MainPage from './components/MainPage';
import BreedContext from './contexts/BreedContext';
import useFetchAllBreeds from './hooks/useFetchAllBreeds';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const breeds = useFetchAllBreeds();
  axios.get('/filters', { params: {
    vocalisation: [1, 2],
    intelligence: [5]
  }})
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
  return (
    <BreedContext.Provider value={breeds}>
      <Router>
        <MainPage/>
      </Router>
    </BreedContext.Provider>
  );
}

export default App;
