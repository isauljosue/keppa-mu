import { Link } from 'react-router-dom';
import styled from 'styled-components';

 
//Info Column

export const WelcomeSection = styled.div`
color: #fff;
height: 100vh;
margin-top: -80px;
position: relative;
background: ${({backColor}) => (backColor ? '#8000ff' : '#d1d1d1')}; 
`;

export const InfoRow = styled.div`
display: flex;
padding: 300px 0;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
position: absolute;
width: 50%;
z-index: 2;
`;


export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width:50%;
flex-basis:50%;

@media screen and (max-width: 768px) {
    max-width:100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 0px;

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
max-width: 275px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
background-color: #f0f0f0;
padding: 20px 22px;
cursor: pointer;
color: ${({lightTextDesc}) => (lightTextDesc ? '#f0f0f0' : '#444444')};

&:hover {
    background-color: #caf7c0;
}
`;

export const SubtitleTwo = styled.p`
max-width: 275px;
margin-top: -25px;
font-size: 18px;
line-height: 24px;
border: 1px #f0f0f0 solid;
padding: 20px 22px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#f0f0f0' : '#444444')};
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
height: 308px;
display: inline-block;
border-radius: 14px;
object-fit: ${({promoted}) => (promoted ? 'cover' : 'contain')};
`;

