import "../day1/props.css";
const Props =({user,job,idx})=>{
    // console.log(user);
    return(      
        <div className="card">
            <div className="img">
                <img src={`/images/dl${idx}.jpg`} alt="카드이미지 01"/>
            </div>
            <h2>{user}</h2>
            <p>{job}</p>
        </div>
    );
}
export default Props;