import React from 'react';
import {DivliniaText} from "./Escena.styled";

const Escena = ({liniaText, nombreLinia, clau}) => {
        
        let condicio=(nombreLinia===clau);

        console.log(liniaText, nombreLinia, clau); 
        //key dona undefined, no es pot passar per props 'key'. Però li puc canviar el nom:'clau'

        return <DivliniaText isRight={condicio}> 
                        <p>{liniaText}</p>    
               </DivliniaText> 

}
export default Escena;