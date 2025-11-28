import style from "./Card.module.css";
import list from "./List.module.css";
const Card = () => {
    console.log(style)
  return (
    <div className={list.p}>
        <h2>모듈카드</h2>
        <p>모듈적용</p>
    </div>
 
  )
}

export default Card