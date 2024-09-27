import { useState } from 'react';
import styled from "styled-components";
import { IoAddCircleOutline } from "react-icons/io5";

const InsertInput = styled.input`
    border: none;
    border-radius: 50px 0px 0px 50px;
    background-color: lightblue;
    height: 40px;
    min-width: 250px;
    padding-left: 15px;
    box-sizing: border-box;
`

const InsertBtn = styled.button`
    width: 50px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
    background-color: black;
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`



// function InsertItem() {}
const InsertItem = (props) => { //부모 컴포넌트인 App에서 props를 매개변수로 전달받음
    const [todoItem, setTodoItem] = useState(''); // todoItem을 상태관리할거임

    const addTodo = () =>{  //InsertBtn을 클릭했을 때 Todo를 추가하는 메서드 어떻게? App컴포넌트한테 받은 props를 활용해서
        props.addItem(todoItem);    // App 컴포넌트에서 setList실행
        setTodoItem('');    //todoItem 공백으로 초기화
    }

    return(
        <>
          <InsertContainer>
            {/* 변화감지되면 setTodoItem으로 상태관리 실행, 이벤트발생대상의 value의 값으로 상태를 변경해줄거임 */}
             <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e)=>{setTodoItem(e.target.value);}} />
             {/* 클릭하면 addTodo 실행 */}
             <InsertBtn onClick={addTodo}>
                 <IoAddCircleOutline />
             </InsertBtn>
             
          </InsertContainer>
        </>

    )
}

export default InsertItem;