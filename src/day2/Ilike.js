import { useState } from "react";
import 
const Ilike =({Images})=>{
    const [Index,setIndex] = useState(0);

    const prev =()=>{
        setIndex(Index === 0 ? Images.length -1 : Index -1);
    };
    const next =()=>{
        setIndex(Index === Images.length -1 ? 0 : Index +1);
    };
    return(
        <img src="./assets/dl1.jpg{[Index]}" alt="슬라이드" />
        <div style={{margin-top:10px}}>
    );

}
export default Ilike;