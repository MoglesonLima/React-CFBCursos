import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react'

function App() {
  
  //Opa
  const [log, setLog] = useState(false)
  const msgLogin=()=>{
    return 'Usuário Logado'
  }
  const msgLogoff =()=>{
    return 'Pfvr Logar'
  }

  const cumprimento =()=> {
    const hora = new Date().getHours()
    if(hora >= 0 && hora < 13){
      return <p>Bom dia</p>
    }else if(hora >=13 && hora < 18){
      return <p>Boa Tarde</p>

    }else{
      return <p>Boa noite</p>
    }
  }

  //OK!

  const [cor,setCor] = useState(1)

  const vermelho = {color: '#f00'}
  const verde = {color: '#0f0'}
  const azul = {color: '#00f'}

  const retornaCor=(c)=>{
    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor=()=>{    
    setCor(cor+1)
    if(cor > 2){
      setCor(1)
    }
  }

  //muda de constantement
  setInterval(mudaCor, 1000)


  return (
    <div className="container">
      <h1>Curso React</h1>
      <h3>Saudação: {cumprimento()}</h3>

      <h3>{log?msgLogin():msgLogoff()}</h3>

      <button onClick={()=>setLog(!log)}>

        {log?'Logoff':'Login'}
      
      </button>
      
      <br/>

      <h3 style={retornaCor(cor)}>Alter color</h3>


      <button onClick={()=>mudaCor()}>Alter Color</button>


    </div>
  );
}

export default App;
