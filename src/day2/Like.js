import { useState } from "react";

const Like = () => {
    const [likes,setLikes] = useState(0);
    // const handleClick = () =>{
    //     setLikes(likes+1);
    // }
    return(
        <div className="Like">
            {/* <button onClick={handleClick}>🖤</button> */}
            <button onClick={()=>{setLikes(likes+1);}}>🖤</button>
            <span>{likes}</span>
        </div>
    );
}
export default Like;