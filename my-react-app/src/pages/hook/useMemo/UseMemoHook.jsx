import { useState } from "react";
import { Title } from "../../../components/Title";
import UseMemoView from "./UseMemoView";

function UseMemoHook(){

  const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  function increase(){
    setNum(num+1);
  }

  function decrease(){
    setNum(num-1);
  }

  function changeText(e) {
   setText(e.target.value);
  }

  return (
    <>
      <Title value="UseMemo" />

      <button onClick={increase}>+</button> &nbsp;
      <button onClick={decrease}>-</button>
      <br />
      <input type="text" onChange={changeText} />
      <br/>
      
      <UseMemoView num={num} text={text} />
    </>
  );
}

export default UseMemoHook;