import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    display:flex;
    flex-direction: column;
    width: 200px;
`

const UserList = () =>{
    const [list, setList] = useState([
        {name: '아이유', age: 25, gender: '여'},
        {name: '카리나', age: 25, gender: '여'},
        {name: '허완', age: 34, gender: '남'}
    ]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const registerUser = () =>{
        const newUser = {name: name, age: age, gender:gender}
        list.push(newUser);

        setList([...list]);

        setName('');
        setAge('');
        setGender('');
    }

    return(
        <>
            <h1>회원 정보 출력</h1>
            <hr></hr>
            {
                list.map((item, index) =>
                    <p>{item.name}{item.age}{item.gender}</p>
                
                )
            }

            <Div>
                <h3>회원 정보 등록</h3>
                <input value={name} type="text" placeholder="이름" onChange={(e)=>{setName(e.target.value)}} />
                <input value={age} type="text" placeholder="나이" onChange={(e)=>{setAge(e.target.value)}} />
                <input value={gender} type="text" placeholder="성별" onChange={(e)=>{setGender(e.target.value)}} />
                <button onClick={registerUser}>회원등록</button>
            </Div>
        </>
    );
}

export default UserList