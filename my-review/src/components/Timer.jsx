import {useEffect, useState} from 'react';
import styled from 'styled-components'

let timer;
function Timer(){

  const [day, setDay] = useState(new Date());
  // day라는 변수를 선언할건데, 상태관리를할거고 초기값은 Date객체를 생성해서 초기화할거야

  useEffect(()=>{
    // 1초마다 시간에 대한 정보를 업데이트
    timer = setInterval(()=>{
      setDay(new Date());
    }, 1000);

    return()=>{
      clearInterval(timer);
    }
  }, []); // 빈배열 []: 렌더링 될 때 마다



  // day라는 변수에서 날짜의 포맷을 지정하고 formatDate 변수에 초기화할거야
  const formatDate = day.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });
  const formatTime = day.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    margin: 2px;
    height: 600px;
  `


  return(
    <Div>
        <h1>현재 시간</h1>
        <p>{formatDate} {formatTime}</p>     
    </Div>
  );
}

export default Timer;