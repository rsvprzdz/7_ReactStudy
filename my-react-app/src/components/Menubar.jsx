import {Link} from 'react-router-dom';
import styled from 'styled-components'

// styled(컴포넌트명)`css...`
const MyLink = styled(Link)`
  background-color: teal;
  color: #eee;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    color: teal;
    background-color: #eee;
  }
`

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

export const Menubar = () => {
  return(
    <nav style={navStyle}>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/cc">Class Component</MyLink>
      <MyLink to="/fc">Functional Component</MyLink>
      <MyLink to="/us">UseState</MyLink>
      <MyLink to="/ue">UseEffect</MyLink>
      <MyLink to="/ur">UseRefHook</MyLink>
      <MyLink to="/uc">UseContext</MyLink>
      <MyLink to="/um">UseMemo</MyLink>
      <MyLink to="/ucb">UseCallback</MyLink>
    </nav>
  )
}

