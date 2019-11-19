import React from 'react';
import LocationList from './components/LocationList';
//import logo from './logo.svg';
import './App.css';
const cities = [
  'Buenos Aires, ar',
  'Washington, us',
  'Bogota, col',
  'Madrid, es',
  'Cochabamba, bo'
];

function App() {

  const handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
  return (
    <div className="App">      
      <LocationList cities={cities} onSelectedLocation={handleSelectionLocation}></LocationList>
    </div>
  );
}

export default App;
