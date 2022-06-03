import React,{useState} from 'react'
import LedVerde from './img/led-verde.png'
import LedVemelho from './img/led-vermelho.png'

function ButtonLed() {
  //EVENTOS

  const[ligado, setLigado] = useState(false);

//   const cancelar =()=>{
//       return false;
//   }
  
  const cancelar =(obj)=>{
    return obj.preventDefault();
}


  return (
    <>

      <img style={{width:'50px'}} src={ligado ? LedVemelho : LedVerde} /> <br/>
      
      <button onClick={
          ()=>{setLigado(ligado ? false:true)}
          }>
          {ligado?'Ligar':'Desligar'}
      </button>
      <br />


      {/* Cancelar ação/evento */}
      <a href='http://youtube.com' target='_blank' onClick={(e)=>cancelar(e)}>
          My link
      </a>
          


     
    </>
  );
}

export default ButtonLed;