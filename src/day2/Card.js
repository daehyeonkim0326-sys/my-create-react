import './card.css';
import State from './State.js';
// import number1Img from './src/assets/dl1.jpg';

//props : 부모 -> 자식 :객체로 전달
const Card = () =>{
    // console.log(data);
    // const fileName = data.file;
    // const {file} = data;
    // const PUBLIC = process.env.PUBLIC_URL;
    return(
        // <div className="card">
        //     <div className="img-wrap">
        //         <img src={`${PUBLIC}/images/${img}.jpg`} alt="day1이미지"/>
        //         <h2>{file}</h2>
        //         <img src='{number1Img}' alt='1번 이미지'/>
        //     </div>
        // </div>
        <State />
    );
}
export default Card;