//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
function App() {
  //Fromularios


  const [nome, setNome]=useState('')
  const handleChangeNome = (e) =>{
    setNome(e.target.value)
  }

  const [carro, setCarro]= useState('')
  const handleChangeCarro = (carro) =>{
    setCarro(carro.target.value)
  }
  
  return (
    <div className="App">
      <label>Nome: </label>

      <input 
        type='text' 
        name='fname'
        value={nome}
        onChange={(e)=>handleChangeNome(e)}
        // onChange={(e)=>setNome(e.target.value)}
        />
      
      <p>Nome Digitado: {nome}</p>

      <label>Carro</label>
      <select value={carro} onChange={(carro)=>setCarro(carro.target.value)}>
        <option value={'HRV'}>HRV</option>
        <option value={'Golf'}>Golf</option>
        <option value={'Cruze'}>Cruze</option>
        <option value={'Argo'}>Argo</option>
      </select>
      <p>Carro: {carro}</p>
    </div>
  );
}

export default App;
