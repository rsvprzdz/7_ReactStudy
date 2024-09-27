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
    text-decoration: 
`




// App에서 {list}{deleteItem}을 받아왔음
export default function TodoList({list , setList, setComplete}){

    function deleteIndex(deleteIndex) {
        list = list.filter((_, index)=>
            index !== deleteIndex

          );
        setList(list);
    }




    return (
        <ListContainer>
          {/* list를 map 반복문을 통해 li태그에 넣을거임 <li>{todo}</li>를 순서대로 만들어줌 */}
          { 
            list.map((todo, index) =>    
                <TodoItem key={'todo'+index} onClick={()=>{setComplete(true)}}>
                    {todo}
                    {/* 버튼누르면 deleteIndex에 index를 매개변수로 넘겨 실행할거임 */}
                    <button onClick={()=>deleteIndex(index)}>x</button>
                </TodoItem> 
            )
          }
        </ListContainer>
    )
}