import React from "react";

export default function Numero(props) {
    //const [num, setNum] = useState(10)

  return (
    <div>
        <p>Valor state num: {props.num}</p>  
        <button onClick={()=>props.setNum(props.num+10)}>Soma 10</button>    
    </div>
  );
}
