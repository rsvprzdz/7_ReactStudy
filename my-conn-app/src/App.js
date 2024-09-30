import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';

function App() {
  return (
    <BrowserRouter>
      <header>
          <Menubar/>
      </header>
      <main style={{textAlign:'center'}}>
        <Routes>
          <Route path="/" element={<p>안녕리액트?</p>}></Route>
          <Route path="/pt1" element={<Practice1/>}></Route>
          <Route path="/pt2" element={<Practice2/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
