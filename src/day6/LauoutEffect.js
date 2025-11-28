import { useEffect, useLayoutEffect, useState } from "react"

const LauoutEffect = () => {
    // useEffect(()=>{
    //     console.log("useE")
    // },[]);
    // useLayoutEffect(()=>{
    //     console.log("ghkadklsajsldjf")
    // });
    const [text,setText] = useState("처음시작");
    const style ={
        fontSize: '3rem',
        padding:'3rem'
    }
    useLayoutEffect(()=>{
        setText("처리완료");
    },[])
  return (
    <div style={style}>
        {text}
    </div>
  )
}

export default LauoutEffect