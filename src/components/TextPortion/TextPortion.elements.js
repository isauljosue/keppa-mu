import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TextWrapper = styled.div`
max-width: 540px;
height: 100%;
padding-top: 0;
padding-bottom: 0px;
display: ${({dissapear}) => (dissapear ? 'none' : 'block')};

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#25d789' : '#444444')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#f0f0f0' : '#444444')};
`;

export const Subtitle = styled.p`
max-width: 450px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#f0f0f0' : '#444444')};
`;


