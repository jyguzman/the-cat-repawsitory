import MainPage from './components/MainPage';
import BreedContext from './contexts/BreedContext';
import useFetchAllBreeds from './hooks/useFetchAllBreeds';

function App() {
  const breeds = useFetchAllBreeds();
  return (
    <BreedContext.Provider value={breeds}>
      <MainPage/>
    </BreedContext.Provider>
  );
}

export default App;
