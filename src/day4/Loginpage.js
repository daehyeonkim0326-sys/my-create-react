import { useState } from "react";
import "../day4/loginpage.css";
import Inputdata from './Inputdata';
import Loginpopup from './Loginpopup';
const Loginpage = () => {
  const [isShow,setIsShow] = useState(false);
  const [strID,setStrID] = useState('');
  const [strPW,setStrPW] = useState('');
  const [strEmail,setStrEmail] = useState('');
  const [isError,setError] =useState(false);
  const handleSubmit =(e)=>{
    //원래 가진 기능이 사용되지 않도록 방지해주는 역할
    e.preventDefault();
    //이메일 주소를 검사한 다음,제대로 된 이메일 주소면 popup오픈
    if(strEmail.includes('@')){
    //popup
    setIsShow(true);}else{
      setError(true);
    }
  };
  const handleEmailBlur =()=>{
    if(strEmail.includes('@')){
      setError(false);
    }else{
      setError(true)
    }
  }
  const handleClose =()=>{
    setIsShow(false);
    setStrID('');
    setStrPW('');
    setError('');
    setStrEmail('');
  }
  return (
  <>
    <form className='login-page' onSubmit={handleSubmit} noValidate>
      <Inputdata title="아이디 또는 전화번호"
      type="text"
      value={strID}
      onChange={(e)=>{setStrID(e.target.value)}}
      />
      <Inputdata title="비밀번호"
      type="password"
      value={strPW}
      onChange={(e)=>{setStrPW(e.target.value)}}/>
      <Inputdata title="이메일 주소"
      type="emali"
      value={strEmail}
      onChange={(e)=>{setStrEmail(e.target.value)}}
      onBlur={handleEmailBlur}
      />
      {
      isError && <p>올바른 이메일 주소가 아닙니다.</p>
      }
      <div className='checkbox'>
      <input type='checkbox' id='check'/>
      <label htmlFor='check'>자동 로그인</label>
      </div>
      <button type='submit'>로그인</button>
    </form>
    {
      isShow && <Loginpopup 
      onClose={handleClose} 
      textID={strID}
      textPW={strPW}
      />
    }
  </>
  )
}


export default Loginpage