import { useMemo } from "react";

function UseMemoView ({num, text}){

  const getNumber = (number) => {
    console.log("숫자가 변경되었습니다. 계산하여 적용");
    
    return number * 7;
  }
  
  const getText = (text) => {
    console.log("글자가 변경되었습니다.");
    return text + "**";
    
  }
  
  /* // useMemo를 사용하지 않은 경우: num이 바뀌면서 렌더링되면 text도 계산되면서 렌더링됨 반대도 마찬가지 비효율적임
  const numberValue = getNumber(num);
  const textValue = getText(text)
  */

  // useMemo 사용
  // : Memoization 기법을 사용한 리액트 훅
  //    -> 한번 연산된 결과를 기억해두고, 다시 동일한 값이 입력되었을 때 기억해둔 데이터를 반환하는 기법
  /*
    useMemo(calculateValue, dependencies)
    * calc... : 캐싱하려는 값을 계산하는 함수
    * dependencies : calc.. 함수 내에서 참조된 모든 값들의 목록 (의존성 배열)
  */
  const numberValue = useMemo(()=>getNumber(num), [num]);
  const textValue = useMemo(()=>getText(text), [text]);


  return (
    <>
      <h3>{numberValue}</h3>
      <h3>{textValue}</h3>
    </>
  );
}

export default UseMemoView;