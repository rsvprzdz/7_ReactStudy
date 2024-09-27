import { useContext } from "react";
import { ResultContext } from "./UseContextHook";

function ResultArea({data}){
  // {data} => props.data

  // 별도의 probs 전달과정 없이 useContext 훅에 ResultContext를 전달받아 ctx라는 변수에 초기화
  const ctx = useContext(ResultContext);
  return (
    <>
      {/* <h3>props로 전달된 데이터 : {data}</h3>

      <h3>context로 가져온 데이터 : {ctx}</h3> */}
      <h2>{ctx}</h2>
    </>
  )
}

export default ResultArea;