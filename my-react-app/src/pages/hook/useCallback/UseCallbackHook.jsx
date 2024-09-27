import { useCallback, useState } from "react";
import { Title } from "../../../components/Title";
import CallbackView from "./CallbackView";

function UseCallbackHook(){

  const [num, setNum ] = useState(0);
  const [dark, setDark ] = useState(false);

  const theme = {
    backgroundColor: dark ? '#222' : '#eee',
    color: dark ? '#eee' : '#222'
  }

  /*  // useCallback 사용 전 : 테마바꾸기 버튼을 누르면 숫자변경함수도 리렌더링시 같이 실행됨
  const getNumbers = () =>{
    return [num, num+5, num+10];
  }
    */
  
  const getNumbers = useCallback(()=>{
    return [num, num+5, num+10]
  }, [num])

  return (
    <div style={theme}>
      <Title value="UseCallback" />

      <input type="number"
             value={num}        
             onChange={(e)=>{setNum(parseInt(e.target.value))}}
      />
       <br /><br />

      <button onClick={()=>{setDark(!dark)}}>테마바꾸기</button>

      <CallbackView getNumbers={getNumbers} />
    </div>
  )

}

export default UseCallbackHook;