import { useState } from "react";

import { test1, test2, test3, test4} from '../services/testApi';

function Practice1(){

    const [data, setData] = useState('');

    //async는 async-await 방식으로 비동기처리했을 때 아래와 같이 써줘야함
    const changeData = async () => {
        /*
        const data = test1();
        setData(data);
        */
        //console.log(test2()); => promise 객체가 넘어옴

        /*  // Promise 객체를 전달받아 처리
        test2()
            .then(result=>{
                console.log(result);
                setData(result.msg);
            })
        */
        /*
            // await도 마찬가지, async-await방식으로 보낸 객체는 await을 써줘야 promise로 받을 수 있음
       const result = await test3();
       console.log(result);
       setData(result.msg);
       */

        // axios 사용
        const result = await test4();
        console.log(result);

        // 요청 성공시 200(실패는 400 500번대)
        if(result.status === 200) {
            setData(result.data.msg);
        }
      
        
    }

    return(

        <>
            <h3>연습용 페이지</h3>
            <br />
            <button onClick={changeData}>테스트</button>
            <br />
            <textarea value={data} cols={30} rows={10} readOnly></textarea>
        </>
    )
}

export default Practice1;