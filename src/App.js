//import React from 'react';
import './App.css';
import Escena from "./components/escena/Escena";
import textHistoria from "./textHistoria.json";

const App = () => {
  
  return (
    <div className="App">

        {textHistoria.map((linia, index) => <Escena key={index} liniaText={linia}/>)}
          
    </div>
  );
}

export default App;
