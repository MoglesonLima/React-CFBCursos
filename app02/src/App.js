import { useState } from 'react';
import './App.css';
import Numero from './components/Numero';

function App() {
  //  STATES

  // const [num, setNumero] = useState(10)
  // let n1 = 10

  // const n100=()=>{
  //   n1=n1+10
  //   console.log(n1)
  // }
  const [num, setNum] = useState(10)

  return (
    <div className="App">

      {/* <p>Valor do state num: {n1}</p>
      <p>Valor do state num: {num}</p>  

      <button onClick={()=>n100()}>Var 01 - not component</button>

      <button onClick={()=>setNumero(num+10)}>Var 02 - component</button> */}
     <Numero num={num} setNum={setNum}/>

    </div>
  );
}

export default App;
