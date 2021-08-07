import styled from "styled-components";

export const DivliniaText = styled.div `
       display: flex;
       flex-direction: column;
       justify-content: center;
       border-radius: 50px ;
       border-style: solid;
       margin-left: 2rem;
       margin-right: 2rem;
       margin-bottom: 1rem;
       margin-top: 1rem;
       padding: 0.5rem;
       background-color: ${(props) => (props.isRight ? "pink" : "white")};

`;