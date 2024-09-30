import { useState } from "react";
import { test5 } from "../services/testApi";

function Practice2(){

    const [list, setList] = useState([]);

    const testClick = async() =>{
        const result = await test5();
        console.log(result);
        
        setList(result.data.msg)
        
        console.log(list);
        
    }
    return(
        <>
            <button onClick={testClick}>테스트</button>
            <table>
                <thead>
                    <th>
                        <td>이름</td>
                        <td>나이</td>
                        <td>직업</td>
                    </th>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => 
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.job}</td>
                            </tr>
                        )
                    }
                </tbody>
                
            </table>
        </>
    )
}

export default Practice2;