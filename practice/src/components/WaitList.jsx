import { useState } from "react";

const MyInput = (props) => {
    const changeInputValue = (e) =>{
        const value = e.target.value;
        props.setData(value);
    }

    return(
        <input type={props.type} placeholder={props.placeholder} value={props.data} onChange={changeInputValue}></input>
    )
}

const WaitList = () => {
    
    const [list, setList] = useState([
        {name:"카리나", number:3, phone:"01011231234"},
        {name:"아이유", number:2, phone:"01012341234"},
        {name:"김두한", number:1, phone:"01012311231"}
    ]);
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [phone, setPhone] = useState('');
    
    function registerUser(){
        const newUser = {name: name, number: number, phone: phone}
        list.push(newUser)

        setList([...list])

        setName('');
        setNumber('');
        setPhone('');
    }

    return(
        <>
            <h2>엘식당 대기 명단 표</h2>
            <table border='1'>
                <thead >
                    <tr>
                        <th>이름</th>
                        <th>인원 수</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index)=> 
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.number}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <hr></hr>
            <h4>새 대기자 추가</h4>
            <MyInput type="text" placeholder="이름 입력" data={name} setData={setName}></MyInput>
            <MyInput type="number" placeholder="인원 수 입력" data={number} setData={setNumber}></MyInput>
            <MyInput type="text" placeholder="연락처 입력" data={phone} setData={setPhone}></MyInput>
            <button onClick={registerUser}>등록</button>
        </>
    );
}

export default WaitList