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
]
function App() {
  return (
    <div className="App">      
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
