import { useState, useEffect} from 'react';

function Clicker(){
  const [count, setCount] = useState(0);
  // const [상태명, 상태변경시 사용할 함수명] = useState(초기값);
  
  useEffect(()=>{
    document.title= '클릭횟수: '+count;
  })
  //=> 지금상태는 렌더링 될 때마다 실행,
  // [] 파라미터가 비어있으면 처음렌더링될때만 실행
  // [변수] 파라미터가 채워져있으면 변수의 상태가 변할때마다 실행

  return (
        // 반드시 요소(Element) 하나만 리턴해야 함!
        <div>
          <p>클릭 횟수: {count}</p>
          <button onClick={()=> {
            setCount(count+1)
          }}>클릭 </button>
        </div>
    );

}

export default Clicker;