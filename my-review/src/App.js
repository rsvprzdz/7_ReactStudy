import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar';
import Timer from './components/Timer';
import CountLetters from './components/CountLetters';

function App() {

  
  return (
    <BrowserRouter>
      <header>
      </header>
      <main>
          <Menubar/>
          <Routes>
            <Route path="/" element={<p style={{textAlign:'center'}}>메인 페이지</p>} />
            <Route path="/timer" element={<p>{<Timer />}</p>} />
            <Route path="/countLetters" element={<p>{<CountLetters />}</p>} />
          </Routes>
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
