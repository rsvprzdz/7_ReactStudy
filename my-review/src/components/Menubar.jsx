import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MyLink = styled(Link)`
  background-color: teal;
  color: #eee;
  margin: 0px 10px;
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    color: teal;
    background-color: #eee;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`


function Menubar(){

  return(
    <Nav>
      <MyLink to="/">HOME</MyLink>
      <MyLink to="/timer">타이머 </MyLink>
      <MyLink to="/countLetters">글자 수 세기</MyLink>
      <MyLink to="/stopwatch">스톱 워치</MyLink>
    </Nav>
  )
}

export default Menubar;