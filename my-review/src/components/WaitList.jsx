import { useEffect } from "react";
import { useState } from "react";

function MyInput(props){

    const changeInputValue = (e) => {
      const value = e.target.value;
      props.setData(value);
    }
  
    return(
        <input type={props.type} placeholder={props.placeholder} value={props.data} onChange={changeInputValue} />
    )
  
  }

const NumberTd = (props) =>{
    let color = '';
    
    if(props.number <= 3){
        color= 'black'
    } else if (props.number >= 10){
        color= 'red'
    } else {
        color = 'orange'
    }


    return(
        <td style={{color: color}}>{props.number}</td>
    )
}

const PhoneTd = (props) => {
   

    if(props.phone != ''){
        return(
            <td>☎{props.phone}</td>
        )
    } else{
        return(
            <td></td>
        )
    }
    

    
}

const WaitList = () => {

    const [wlist, setWlist] = useState([
                                         {name: '아이유', number: 10, phone:'010-1010-1010'},
                                         {name: '차은우', number: 5, phone:'010-3030-3030'},
                                         {name: '카리나', number: 3, phone:'010-7070-7070'}
                                        ]);

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [phone, setPhone] = useState('');

    //디버깅용
    // useEffect(()=>{
    //     console.log("****************")
    //     console.log({wlist});
    //     console.log("****************")
    // }, [wlist])

    const registUser = () => {
        const newUser = {name: name, number: number, phone: phone}
        wlist.push(newUser);

        setWlist([...wlist]);

        setName('');
        setNumber('');
        setPhone('');
    }

    

    

    return(
        <div align="center">
            <h2>엘식당 대기 명단 표</h2>
            <br></br>
            <table border='1'>
                <thead style={{backgroundColor: 'lightgray'}}>
                    <tr>
                        <th>이름</th>
                        <th>인원 수</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        wlist.map((item, index) =>
                            /*
                            <tr {'user'+index}>
                                <td>{item.name}</td>
                                <td style={{color: item.number > 5 ? 'red' : item.number > 3 ? 'orange' : ''}}>{item.number}</td>
                                <td className={item.number > 5 ? 'c-red' : 'c-blue'}>
                                    {item.phone === '' ? '' : '☎'+item.phone}
                                </td>
                            </tr>
                            */
                            <tr key={'user'+index}>
                                <td>{item.name}</td>
                                <NumberTd number={item.number} />
                                <PhoneTd phone={item.phone} />
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <hr></hr>
            <h3>새 대기자 추가</h3>
            <div>
                <MyInput type="text" placeholder="이름 입력" data={name} setData={setName} />
                <MyInput type="number" placeholder="인원수 입력" data={number} setData={setNumber} />
                <MyInput type="text" placeholder="연락처 입력" data={phone} setData={setPhone}/>
                <button onClick={registUser}>등록</button>
            </div>
        </div>
    );
} 

export default WaitList

