//import React from 'react';
import './App.css';
import Escena from "./components/escena/Escena";
import textHistoria from "./textHistoria.json";

const App = () => {
  return (
    <div className="App">
        <Escena
            LiniaText = {textHistoria.map((linia, index) =>
            <ul key={index}>{linia}</ul>)}
        />
    </div>
  );
  
}

export default App;
