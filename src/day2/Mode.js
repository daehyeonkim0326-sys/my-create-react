import { useState } from "react";
const Mode =()=>{
    const [color,setColor] = useState('blue');
    const style = {
        width:'300px',
        height:'200px',
        padding:'1rem',
        backgroundColor:color
    }
    const handleClick =()=>{
        // if(color==='blue'){
        //     setColor('tomato');
        // }else{
        //     setColor('blue');
        // }
        setColor(color === 'blue'?'tomato':'blue');
    }
    return(
        <div className="Mode" style={style}>
            <p>현재 박스색상:{color}</p>
            <button onClick={handleClick}>색상변경</button>
        </div>
    );
}
export default Mode;