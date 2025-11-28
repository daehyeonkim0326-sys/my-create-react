import { useEffect, useState } from "react";
import styled from "./Timer.module.css";
const Timer = () => {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const handleStartStop =()=>{
        setIsRunning(!isRunning);    
    }
    useEffect(()=>{
        let intervelID;
        if( isRunning ){
            intervelID = setInterval(()=>{
                setTime((prev)=>{return prev+1})
            },1000);
    }
    
        // return()=>{clearInterval(intervelID)},[!isRunning]);
        const handleReset =()=>{
            setTime(0);
            setIsRunning(false);
        }
        const minutes = Math.floor(time/60);
        const seconds = time%60;
        const format =(rum)=>{
            return String(num).padStart(2,"0");
        }
  return (
    <div className={styled.timer}>
        <p>{time}</p>
        <div>
            <button onClick={handleStartStop}>
                {isRunning ? "STOP" : "START"}
            </button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}

export default Timer