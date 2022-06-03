import './App.css';
import React from 'react'

// function App() {
//   const carros = ['HRV','Golf','Focus','Cruze','Argo']

//   const listCarros = carros.map(
//     (c)=>
//       <li>{c}</li>
//   )


function App() {


  const carros = ['HRV','Golf','Focus','Cruze','Argo']

  const carrosJson = [
    {categoria: 'Esporte', preoco: '110000.00', modelo: 'golf GTI'},
    {categoria: 'Esporte', preoco: '110000.00', modelo: 'golf GTI'},
    {categoria: 'Esporte', preoco: '110000.00', modelo: 'golf GTI'},
    {categoria: 'Esporte', preoco: '110000.00', modelo: 'golf GTI'},
    {categoria: 'Esporte', preoco: '110000.00', modelo: 'golf GTI'}
  ];
  const listCarros = carros.map(
    (c,i)=>
      <li key={i}>{i} - {c}</li>
  )

  return (
    <div >
      <ul>
      {listCarros }
      </ul>
      
    </div>
  );
}

export default App;
