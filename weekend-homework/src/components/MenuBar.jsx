
import styled from 'styled-components';

const Menu = styled.div`
    background-color: #806044;
    color: #EDE1D2;
    padding: 5px;
    margin: 2px;
    border-radius: 50px;
    text-align: center;
    text-decoration: none;
`

const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto'
}

const MenuBar = () => {
    return (
        <nav style={navStyle}>
            <Menu to="todo">Todo-list</Menu>
            <Menu to="#">Menu-name</Menu>
            <Menu to="#">Menu-name</Menu>
            <Menu to="#">Menu-name</Menu>
        </nav>
    )
}

export default MenuBar;