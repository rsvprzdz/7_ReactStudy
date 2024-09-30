import axios from 'axios';

export const test1 = () => {
    return "테스트다!!!"
}

export const test2 = () => {
    /*
        fetch API

        fetch(요청 주소, options)
        - options
            * method: 통신방식 (get/post/put/delete)
            * headers: 요청 헤더 설정
            * body: POST 요청 시 전달할 데이터
        
        fetch("요청주소", {method: 'get', headers: {}, body: {}})
    */

    
    return fetch("http://192.168.10.11:7777", {})
    .then(response=>{               //ajax success와 비슷
        if(response.ok){            //리스폰스가 넘어왔으면
            return response.json()  //응답을 제이슨 형태로 넘김
        }
        throw new Error("test2 :: 통신오류!@") //fail
    }).then(data=>{
        console.log(data);
        return data;
    })
    .catch(error=>{
        console.log(error);
    })

    
}

export const test3 = async () => {
    try {
        const response = await fetch("http://192.168.10.11:7777", {});
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
        throw new Error("test3 :: 통신 실패@!");
    }
}

export const test4 = async () => {
    return await axios.get("http://192.168.10.11:7777");
}

export const test5 = async () => {
    return await axios.post("http://192.168.10.11:7777/list")
}