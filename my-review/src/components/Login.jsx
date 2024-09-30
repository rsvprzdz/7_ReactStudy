import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../App";

    const Div = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const inputStyle = {
        width: "400px",
        boxSizing: "border-box",
        margin: "5px"
    }

    const buttonStyle = {
        width: "400px",
        margin: "5px",
        backgroundColor: ""
    }


function Login(){
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const userCtx = useContext(UserContext);

    const handlerLogin= () => {
        userCtx.setData({id: userId, pwd: userPwd});
        // userCtx.setData => setUser
        // 입력된 id, passwd를 context에 저장
        console.log(userId);
        console.log(userPwd);
        
    }

    function changeId(e){
        console.log(e.target.value);
        
        setUserId(e.target.value)
    }

    function changePwd(e){
        console.log(e.target.value);
        
        setUserPwd(e.target.value)
    }
    
    return(
            <Div>
                <input value={userId} style={inputStyle} type="text" name="userId" placeholder="아이디" onChange={(e)=>changeId(e)} />
                <input value={userPwd} style={inputStyle} type="password" name="userPwd" placeholder="비밀번호" onChange={(e)=>changePwd(e)}/>
                <button style={buttonStyle} type="submit" onClick={handlerLogin}>로그인</button>
            </Div>
    );

}

export default Login;