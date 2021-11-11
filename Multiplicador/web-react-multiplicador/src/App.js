import React, {useState} from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {

  let N1 = document.querySelector('#N1');
  let N2 = document.querySelector('#N1');
  let resultados = document.querySelector('span')

   function multiplicar(){
    resultados.innerHTML = parseInt(N1.value) * parseInt(N2.value)

      if(parseInt(N1.value) * parseInt(N2.value))
      {
        console.log("Calculo Sucesso")
      }
      if( parseInt(N2.value) * parseInt(N1.value) )
      {
        console.log("Calculo Sucesso2")
      }
        
      
      else
        console.log("deu algo errado")
        return;
   }

  


 
 return (

   <div id="container">
     <div className="card">
     <h2>Multiplicador de Números</h2>
     <div className="lineInput">
            <input type="number" id="N1" placeholder="Digite o primeiro nº"></input>
          </div>

           <div className="lineInput">
             <input type="number" id="N2" placeholder="Digite o segundo nº"></input>
           </div>
     <button onClick={multiplicar}>Calcular</button>
     <h3>Resultado: <span> 0</span></h3>
     
     </div>
   </div >
 )
 
}
export default App;