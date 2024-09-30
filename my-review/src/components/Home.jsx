import { useContext, useEffect } from "react";
import Login from "./Login";
import { UserContext } from "../App";

function Home (){
    const userCtx = useContext(UserContext);
    const user = userCtx.data;  //userCtx.data => user

    useEffect(()=>{
        console.log(1);
        console.log(userCtx);
        console.log(2);
      }, [])

    return(
        <>
            {
                user.id === '' ?
                    <Login />
                :
                    <div>
                        <p>{user.id}님 반갑습니다 ^^</p>
                        <input type="button" value="로그아웃" onClick={()=>{userCtx.setData({id: '', pwd: ''})}} />
                    </div>
            }
        </>
    );


}

export default Home;