import React,{useState} from 'react'
import './App.css';

function App() {
  const [form, setForm] = useState({'nome':'', 'curso':'','ano':''})

  const handleFormChange = (e)=> {
    if(e.target.getAttribute('name') == 'fnome'){
      setForm({'nome': e.target.value, 'curso': form.curso, 'ano': form.ano})
    }else if(){

    }else if(){
      
    }
  }


  return (
    <div className="App">
      
      <label>Nome</label>
      <input type='text' name='fnome' value={form.nome} onchange={(e)=>handleFormChange(e)}/> <br/>
      <label>Curso</label>
      <input type='text' name='fcurso' value={form.curso} onchange={(e)=>handleFormChange(e)}/> <br/>
      <label>Ano</label>
      <input type='text' name='fano' value={form.ano} onchange={(e)=>handleFormChange(e)}/> <br/>

      <p>Nome: {}</p>
      <p>Curso: {}</p>
      <p>Ano: {}</p>
    </div>
  );
}

export default App;
