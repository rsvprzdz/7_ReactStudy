import styled from 'styled-components';
import {useState} from 'react';
import { useRef } from 'react';

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid;
margin: 2px;
`
const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 3px solid gray; /* 선의 굵기와 색상 지정 */
  margin: 10px 0;
`;

const Textarea = styled.textarea`
  width: 60%;
  height: 500px;
`

function CountLetters(){

  const [text, setText] = useState('');

  // dom 요소에 접근할 수 있게 해줌
  const taRef = useRef();

  const changeText = (e) => {
    setText(e.target.value);
  }

  const resetPage = () =>{
    setText('');

    taRef.current.focus();
  }

  return(
    <Div>
      <Textarea value={text} 
                onChange={changeText}
                ref={taRef}></Textarea>
      <Hr />
        공백 포함 {text.length} 자
        <br /><br />
        {/* / /g: 정규식(?,,, g는 글로벌) replaceAll(' ', '')와 같음 */}
        공백 제외 {text.replace(/ /g, '').length} 자
      <Hr />
        <button onClick={resetPage}>초기화</button>
    </Div>
    
  );
}

export default CountLetters;