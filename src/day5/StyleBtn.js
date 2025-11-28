import styled from "styled-components"
const Button = styled.button`
    /* background-color: ${(props)=>props.color || "tomato"}; */
    background-color: ${({color})=> color || "tomato"};
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: ${({size})=> size || "1rem"};
`;
const DivBox = styled.div`
    /* background-color: aqua;
    size: 3rem;
    color: #fff; */
    background-color: ${({theme})=>theme.bg};
    font-size: ${({theme})=>theme.size};
    color: ${({theme})=>theme.text}
`;
const StyleBtn = () => {
    const style = {
        bg:'blue',
        size:'2rem',
        text:'#fff'
    };
  return (
    <div>
        <Button color="blue" size='2rem'>파랑</Button>
        <Button color="green">초록</Button>
        <Button size='5rem'>기본</Button>        
        <DivBox theme= {style}>스타일 묶음</DivBox>
        <DivBox theme= {{bg:'yellow',size:'5tem', text:'purple'}>스타일 묶음</DivBox>
        <DivBox theme= {{bg:'yellow',size:'5tem', text:'blue'}>스타일 묶음</DivBox>
    </div>
  )
}

export default StyleBtn