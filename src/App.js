import Card from "./day2/Card";
import "./App.css";

const App =()=>{
    return (
        //화면에 보여지는 영역 : JSX
        // <h1>react start</h1>
        <div className="card-wrap">
        <Card file='D-2' img='dl1'/>
        {/* <Card file='D-1'img='dl2'/> */}
        {/* <Card file='TODAY' img='pl2'/> */}
        </div>
    );
}
export default App; 