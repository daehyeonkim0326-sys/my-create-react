import { useState } from 'react'

const Eventchange = () => {
    const [text,setText] =useState('');
    const handleChange =(e)=>{
        const txt = e.target.value;
        setText(txt);
    }
  return (
    <div className='change'>
        <input onChange={handleChange} value={text}/>
        <p>input 입력값:{text}</p>
        
    </div>
  )
}

export default Eventchange