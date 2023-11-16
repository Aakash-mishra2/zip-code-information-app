import './App.css';
import HomePage from './dashboard/homePage';
import MainHeader from './dashboard/mainHeader';
import PlaceList from './dashboard/placeList';

function App() {
  return (
    <div className="App">
    <MainHeader />
      <HomePage />
      <PlaceList />
    </div>
  );
}

export default App;
