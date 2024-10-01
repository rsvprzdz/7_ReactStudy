import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar';
import Timer from './components/Timer';
import CountLetters from './components/CountLetters';
import Home from './components/Home';
import { createContext, useEffect, useState } from 'react';
import StopWatch from './components/StopWatch';

export const UserContext = createContext();
let defaultUser = {
  id: '',
  pwd: ''
}

function App() {
  // defaultUser를 초기값으로 줘서 [id:'', pwd:'']와 동일함
  const [user, setUser] = useState(defaultUser);
  const defaultContext = {
    data: user,
    setData: setUser
  }




  return (
    <BrowserRouter>
      <main>
          <Menubar/>

        <UserContext.Provider value={defaultContext}>
          <Routes>
            <Route path="/" element={<p>{<Home/>}</p>} />
            <Route path="/timer" element={<p>{<Timer />}</p>} />
            <Route path="/countLetters" element={<p>{<CountLetters />}</p>} />
            <Route path="/stopwatch" element={<p>{<StopWatch/>}</p>} />
          </Routes>
        </UserContext.Provider>
      </main>
    </BrowserRouter>
  );
}

// function Today(){
  
//   const[count, setCount] = useState();

//   useEffect(()=>{
//     const timer = setInterval(()=>{
//       setCount((prev) => prev+1);
//     }, 1000);
//   });

//   const date = new Date();
//   const today = date.toLocaleDateString();
//   const time = date.toLocaleTimeString();

//   return(
//     <div>
//       <p>{today}</p>
//       <br></br>
//       <p>{time}</p>
//     </div>
//   );
// }

export default App;
