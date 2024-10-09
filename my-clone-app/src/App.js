import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { FooterText, Header, Logo, Main, MainContainer } from './components/StyledComponents';

import './App.css';
import './css/fonts.css'
import Menubar from './components/Menubar';
import MainPage from './pages/MainPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <MainContainer>

          <Header>
            {/* 로고 | 메뉴 | 마이페이지 */}
            <Logo>WANFLIX</Logo>
            <Menubar />
            MyPage
          </Header>
 
          <Main>
            {/* 메인 컨텐트 영역 */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/tv' element={<p>메뉴페이지</p>} />
            </Routes>
            <p></p>
          </Main>
 
          <footer>
            {/* 회사 정보 | 연락처 ... */}
            <h3>완플릭스 대한민국</h3>
            <FooterText>완플릭스 코리아 xx회사</FooterText>
            <FooterText>대표: 허완</FooterText>
            <FooterText>이메일 주소: wanwan@wanflix.com</FooterText>
            <FooterText>주소: 서울 강남구 테헤란로 10길 9</FooterText>
          </footer>

        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
