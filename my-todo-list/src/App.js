import './App.css';
import InsertItem from './components/InsertItem';
import MyContainer from './components/MyContainer';
import TodoList from './components/TodoList';

import { useState } from 'react';

function App() {

  const [list, setList] = useState(['샘플', '데이터']);
  const [complete, setComplete] = useState([false]);

  const addItem = (todoItem) => {   // IsertItem 컴포넌트에서 추가될 데이터를 매개변수로 받아
                                // list 상태에 추가
    list.push(todoItem);
    setList([...list]); // ... -> 스프레드 연산자, 기존 배열을 분해하여 새로운 배열로 복사
    // 리액트에서는 push같은 직접적인 변경메서드를 사용하면 리액트가 감지하지 못함 why? 
    // 리액트는 렌더링시 상태 변경 여부를 감지하는 기준이 "레퍼런스 변경" 기준임
    // 위를 예로 들면 list.push(todoItem)를 통해 리스트의 내용이 업데이트 되었지만
    // 리스트 자체의 레퍼런스는 변경되지 않았음 때문에 렌더링시 감지되지않음
    // list를 분해한 값을 setList로 list에 새로 초기화하면 레퍼런스가 변경된 새로운 배열이 탄생하는거임
    // 때문에 리액트는 비로소 렌더링 시 변경사항을 감지하게됨
  }

 

  return (
    <div className="App">
      {/* title키를 통해 My TodoList를 prop으로 전달할거임 */}
      <MyContainer title="My TodoList"> 
        {/* addItem키를 통해 {addItem}을 prop으로 IsertItem에 전달함 */}
        <InsertItem addItem={addItem}/>
        {/* TodoList 컴포넌트로 list 을 전달할거임 */}
        <TodoList list={list} setComplete={setComplete} setList={setList}/>

      </MyContainer>
    </div>
  );
}

export default App;
