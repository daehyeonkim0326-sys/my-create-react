import './card.css';
//props : 부모 -> 자식 :객체로 전달
const Card = ({file,img}) =>{
    // console.log(data);
    // const fileName = data.file;
    // const {file} = data;
    return(
        <div className="card">
            <div className="img-wrap">
                <img src={`/images/${img}.jpg`} alt="day1이미지"/>
                <h2>{file}</h2>
            </div>
        </div>
    );
}
export default Card;