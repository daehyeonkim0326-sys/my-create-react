import styled from "styled-components"
const Button = styled.button`
    background-color: blueviolet;
    color: beige;
    border-radius: 1rem;
    border: 1px solid #222;
    padding: 0.5rem 1rem;
`;
const BigBtn = styled(Button)`
    font-size: 2rem;
`;
const StyleType = () => {
  return (
    <>
        <Button>작은 사이즈</Button>
        <BigBtn>큰 사이즈</BigBtn>
    </>
  )
}

export default StyleType