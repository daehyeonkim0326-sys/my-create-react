

const Evantclick = () => {
    const handleClick=(event)=>{
        // alert('ㅅㄱ');
        console.log(event.target);
    }
  return (
    <div className='click'>
        <button onClick={handleClick}>Evantclick</button> 
    </div>
  )
}

export default Evantclick