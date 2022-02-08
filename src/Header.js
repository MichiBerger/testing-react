import styled from "styled-components";

export default function Header(){
  return <TitleHeader>Testing React with styled compoments</TitleHeader>;
}

const TitleHeader = styled.h1`
text-align: center;
background-color: #ccd;
padding: 1rem;
`