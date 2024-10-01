import { useEffect } from "react";
import { useState } from "react";


const StopWatch = () => {
    
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(()=>{
        let timer;

        if(isRunning){
            timer = setInterval(()=>{
                   setTime(prevTime => prevTime+1);
               }, 1000);
        }
        
        return()=>{
            clearInterval(timer);
        }

    }, [isRunning]);

    const startTimer =() => {
        setIsRunning(true);
    }

    const stopTimer =() => {
        setIsRunning(false);
    }

    const resetTimer =() =>{
        setTime(0);
        setIsRunning(false);
    }


    return (
        <>
            <h1>StopWatch</h1>
            <br/>
             {parseInt(time / 60)} : {time % 60}
            <br/>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    );
}

export default StopWatch