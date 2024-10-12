import { useState } from "react";

const Clicker = () => {
    const [count, setCount] = useState(0);

    return(
        <>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <p>{count}</p>
        </>
    );   
}

export default Clicker