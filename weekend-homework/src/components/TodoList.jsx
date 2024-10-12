import { useState } from 'react';
import styled from 'styled-components';


const ListContainer = styled.ul`
    width: 100%
    margin: 12px 0px;
    padding: 0px 30px;
`

const TodoItem = styled.li`
    height: 30px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
`

const TodoText = styled.span`
    cursor: pointer;
    text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
    cursor: pointer;
    margin-left: 10px;
`;


// App에서 {list}{setList}을 받아왔음
export default function TodoList({list , setList}){
    const [complete, setComplete] = useState(Array(list.length).fill(false));

    function toggleIndex(completeIndex) {
        const updatedComplete = [...complete];
        updatedComplete[completeIndex] = !updatedComplete[completeIndex];
        setComplete(updatedComplete);
    };

    function deleteItem(deleteIndex) {
        list = list.filter((_, index)=>
            index !== deleteIndex
          );
        setList(list);

        const updatedComplete = complete.filter((_, index) => index !== deleteIndex);
        setComplete(updatedComplete);
    }

    return (
        <ListContainer>
          {/* list를 map 반복문을 통해 li태그에 넣을거임 <li>{todo}</li>를 순서대로 만들어줌 */}
          { 
            list.map((todo, index) =>    
                <TodoItem key={'todo'+index} >
                    <TodoText complete={complete[index]} onClick={()=>{toggleIndex(index)}}>
                        {todo}
                    </TodoText>
                    {/* 버튼누르면 deleteIndex에 index를 매개변수로 넘겨 실행할거임 */}
                    <DeleteButton onClick={(e)=> {e.stopPropagation(); 
                                                    deleteItem(index);}}>x</DeleteButton>
                </TodoItem> 
            )
          }
        </ListContainer>
    )
}