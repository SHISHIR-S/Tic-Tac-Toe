import { useState } from "react";
function Square() {
  function whnclick() {
    setValue('X');
  }
  const [value, setValue] = useState(null);
  return <button className="square" onClick={whnclick}>{value}</button>
}

export default function Board() {
  return (<>
    <div className="box">
    <Square value='1'/>
    <Square value='2'/>
    <Square value='3'/>
    </div>
    <div className="box">
    <Square value='4'/>
    <Square value='5'/>
    <Square value='6'/>

    </div>
    <div className="box">
    <Square value='7'/>
    <Square value='8'/>
    <Square value='9'/>
    </div>
  </>);
}