import { useState } from 'react';

function User(props){

  const user = props.user;

  return (
    <tr >
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
    </tr>
  )
}

function MyInput(props){
  // props => 부모 컴포넌트를 통해 전달된 상태(데이터): UserList
  const changeInputValue = (e) => {
    const value = e.target.value;
    props.setData(value);
  }

  return(
      <input type={props.type} placeholder={props.placeholder} value={props.data} onChange={changeInputValue} />
  )

}

function UserList(){
    const [list, setList] = useState([
      {name: '기다운', age: 30, gender: '남자', phone: '010-1234-1234'},
      {name: '카리나', age: 25, gender: '여자', phone: '010-7777-8888'},
      {name: '아이유', age: 30, gender: '여자', phone: '010-2222-9999'}
    ]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    /*
    function changeName(e){
      // 이벤트가 발생한 밸류값을 inputValue에 초기화
      const inputValue = e.target.value; // 입력 요소의 변경된 값
      setName(inputValue);              // 해당 값을 상태에 적용(저장)
    }

    function changeAge(e){
      const inputValue = e.target.value;
      setAge(inputValue);
    }

    function changeGender(e){
      const inputValue = e.target.value;
      setGender(inputValue);
    }

    function changePhone(e){
      const inputValue = e.target.value;
      setPhone(inputValue);
    }
    */

    const registUser = () => {
        // alert(name+", "+age+", "+gender+", "+phone);
        const newUser = {name: name, age: age, gender: gender, phone: phone}
        list.push(newUser);

        setList([...list]); // 전개 연산자 : 새로운 배열로 복사

        // 입력창 부분을 초기화
        setName('');
        setAge('');
        setGender('');
        setPhone('');

    }

    return(
        <div>
            <h1>회원정보 출력</h1>
            
            <hr></hr>

            <div>
                <h3>회원 정보 등록</h3>
                <hr></hr>
{/*                 
                <input type='text' placeholder='이름' value={name} onChange={changeName} />
                <input type='text' placeholder='나이' value={age} onChange={changeAge} />
                <input type='text' placeholder='성별' value={gender} onChange={changeGender} />
                <input type='text' placeholder='연락처' value={phone} onChange={changePhone} /> */}
                
                <MyInput type="text" placeholder="이름" data={name} setData={setName} />
                <MyInput type="text" placeholder="나이" data={age} setData={setAge} />
                <MyInput type="text" placeholder="성별" data={gender} setData={setGender} />
                <MyInput type="text" placeholder="연락처" data={phone} setData={setPhone} />

                <button onClick={ registUser }>등록</button>
            </div>

            <hr></hr>
            <table>
                <thead>
                    <tr>
                      <th>이름</th>
                      <th>나이</th>
                      <th>성별</th>
                      <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    list.map((item, index) => 
                        <User key={'user'+index} user={item}/>
                    )
                  }
                </tbody>
            </table>
        </div>
    )
}

export default UserList;