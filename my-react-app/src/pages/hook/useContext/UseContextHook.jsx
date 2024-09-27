import { createContext, useState } from "react";
import { Title } from "../../../components/Title";
import ResultArea from "./ResultArea";

// ResultContext 변수명으로 Context를 생성해서 export 할거임
export const ResultContext = createContext();

function UseContextHook(){

  const [hobby, setHobby] = useState('');
  const [result, setResult] = useState('');

  function changeHobby(e){
    setHobby(e.target.value);
  }

  function changeResult(){
    setResult(`취미는 ${hobby}입니다.`);
  }


  return(
    <>
      {/* 전체를 생성한 Context명.Provider로 감싸준다. */}
      {/* ResultContext.Provider 선언을 통해 value로 설정한 값은 
      하위 모든 자식들이 별도 props 전달 없이 사용 가능해짐
      여기선 입력받은 hobby를 포함하는 텍스트인 취미는~이 세팅된 result를 전달해주는것*/}
      <ResultContext.Provider value={result}>
        <Title value="UseContext" />
        <input type="text" value={hobby} placeholder="취미를 입력하세요" onChange={changeHobby}/>
        <button onClick={changeResult}>결과보기</button>

        {/* ResultArea 컴포넌트로 data를 props로 보낼건데
        이렇게하면 자식요소가 많아질수록 props를 계속 전달해줘야함
        그래서 위의 Context를 export해두면 모든 자식들이 전달된 데이터를 사용할수 있음 */}
        <ResultArea data="샘플" />

      </ResultContext.Provider>
    </>
  )

}

export default UseContextHook;