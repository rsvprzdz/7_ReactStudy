import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./components/StyledComponents";
import { MainTitle } from "./components/StyledComponents";
import { StartButton } from "./components/StyledComponents";
import LeftContainer from "./components/LeftContainer"
import MenuBar from "./components/MenuBar";
import RightContainer from "./components/RightContainer";
import TodoList from "./components/TodoList";
import MyContainer from "./components/MyContainer";
import InsertItem from "./components/InsertItem";

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [list, setList] = useState(['샘플', '데이터']);
  

  const addItem = (todoItem) => {   // IsertItem 컴포넌트에서 추가될 데이터를 매개변수로 받아
                                // list 상태에 추가
    list.push(todoItem);
    setList([...list]); 
  }
  
  return (
    <BrowserRouter>
      <AppContainer>
        <LeftContainer width={isStarted ? '30%' : '70%'}>
          {
            isStarted ?
            <MenuBar />
            :  
            <MainTitle>
              My Weekend Homework <br/>
              Page
            </MainTitle>
          }
        </LeftContainer>
        <RightContainer style={rightStyle} width={isStarted ? '70%' : '30%'}>
          {
            isStarted ?
            <MyContainer title="My TodoList"> 
              <InsertItem addItem={addItem}/>
              <TodoList list={list} setList={setList}/>
            </MyContainer>
            :
            <StartButton onClick={()=>{setIsStarted(true)}}>Start</StartButton>
          }
        </RightContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
