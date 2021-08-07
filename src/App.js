//import React from 'react';
import './App.css';
import Escena from "./components/escena/Escena";
import textHistoria from "./textHistoria.json";
import { useState } from 'react';
import {StyledButton} from "./styled";
import {StyledivButtons} from "./styled";


const App = () => {

  const [nlinia, setnLinia] = useState(0);

  function avançar(){
    //alert("Hola A")
    if (nlinia < textHistoria.length-1){
      //console.log(nlinia, textHistoria.length);
        setnLinia (nlinia+1);
    }else{
        const nlinia = -1;
        setnLinia (nlinia+1);
    }
    }
    
  function retrocedir(){
    //alert("Hola R")
    if (nlinia <= 0){
      const nlinia = textHistoria.length
      //console.log(nlinia, textHistoria.length);
      setnLinia (nlinia-1);
    }else{
      //console.log(nlinia, textHistoria.length);
      setnLinia (nlinia-1);
  }
  }
  
  return (
    <div className="App">

    <StyledivButtons>
      <StyledButton onClick={retrocedir}>Anterior</StyledButton>
      <StyledButton onClick={avançar}>Següent</StyledButton>
    </StyledivButtons>

        {textHistoria.map((linia, index) => {
  
               // {console.log(linia, index, nlinia)}
               
                 return <Escena clau={index} liniaText={linia} nombreLinia={nlinia}/>})}
                        {console.log(nlinia)}
                </div>      
  );
}

export default App;
