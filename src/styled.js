import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle `
       
     *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
     }    
`;


export const StyledButton = styled.button `
        padding: 1.5rem;
        width: 50%;
        font-weight: bold;
        font-size: 1.5rem;
`;

export const StyledivButtons = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;

`;


