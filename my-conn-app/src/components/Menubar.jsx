import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Menubar(){

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


    return(
        <Nav>
            <MyLink to="/">HOME</MyLink>
            <MyLink to="/pt1">연습</MyLink>
            <MyLink to="/pt2">연습2</MyLink>
        </Nav>
    )

}

export default Menubar;