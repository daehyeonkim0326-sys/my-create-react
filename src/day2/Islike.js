import { useState } from "react";
const Islike = ()=>{
    const[Islike,setIslike]=useState(true)
    return(
        <div className="is-like">
            <p>현재 좋아요 : </p>
            <button onClick={()=>{setIslike(!Islike)}}>{Islike? "on":"off"}좋아요 토글</button> 
        </div>
    );
}
export default Islike;
