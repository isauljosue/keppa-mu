import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

body {
    background: #8000ff;
}

a {
    font-family: 'Prompt', sans-serif;
}

h1 {
  font-size: 45px;
  font-family: 'Prompt', sans-serif;
  color: #8000ff;
}

h2 {
    font-family: 'Prompt', sans-serif;
    font-weight: 600;
    line-height: 0.75em;
  }
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
margin-top: ${({topspacing}) => (topspacing ? '97px' : '0px')};
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}

@media screen and (max-width: 1280px) {
    margin-top: 0px;
}
`;


export const LinkArrowButton = styled.button`
max-width: 275px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
background-color: #f0f0f0;
padding: 20px 22px;
cursor: pointer;
outline: none;
border: 1px #8000ff solid;
color: ${({lightTextDesc}) => (lightTextDesc ? '#f0f0f0' : '#444444')};
display: ${({isLink}) => (isLink ? 'none' : '')};

&:hover {
    background-color: #caf7c0;
}
`;

export default GlobalStyle;