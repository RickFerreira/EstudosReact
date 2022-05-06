//sempre importar o react assign
//useState serve para mudar os estados
import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody.js';

function App() {
  //o que vai ficar inicialmente
  const [str, setStr] = useState('Olá mundo');
  //a funçaõ do click com a variavel que vai mudar a de cima
  function handleClick(){
    setStr("Hello World!!")
  }
  
  return ( 
    //chamando o h2 com o valor mutavel e o botão com o evento
    <div className = "App" >
      <h2> {str} </h2> 
      <button onClick={()=>handleClick()}>Clique aqui</button>
      <MyBody conteudo="Rick"></MyBody>
      <MyBody conteudo="Paty"></MyBody>
      <MyBody conteudo="Henrique"></MyBody>
    </div>
    //com isso voce consegue chamar uma classe que tem um conteudo e trabalhar com eles 

  );
}

export default App;