import './App.css';
import React,{useState} from 'react'
import ButtonLed from './components/ButtonLed'

function App() {
  //EVENTOS

  const[ligado, setLigado] = useState(false);
  
  return (
    <div className="App">

      <h1>CFB Cursos</h1>

      <ButtonLed />

      {/* <img style={{width:'50px'}} src={ligado ? LedVemelho : LedVerde} /> <br/>
      
      <button onClick={()=>{setLigado(ligado ? false:true)}}>{ligado?'Ligar':'Desligar'}</button> */}


     
    </div>
  );
}

export default App;
