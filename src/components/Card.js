import styled from 'styled-components';

export default function Card() {
  return (
    <>
      <CardContainer>
        <h2>name</h2>
        <p>company</p>
        <p>about me</p>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid black;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.2);
  `