import React from 'react';
import { useState } from 'react';
import './App.css';
const App = () => {
 const [counter, setCount] = useState(0);
 
 const incrementar = () => setCount(counter + 1);
 const decrementar = () => setCount(counter - 1);
 
 return (

   <article id="container">
     <div class="corpo">
     <h2>Contador de Pessoas</h2>
     <div> <h1 class="borda">{counter}</h1></div>
     <button class="in" onClick={incrementar}>+</button>
     <button class="de" onClick={decrementar}>-</button>
     
     </div>
   </article >
 )
 
}
export default App;