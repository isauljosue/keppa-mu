import { Link } from 'react-router-dom';
import styled from 'styled-components';


//Info Column

export const InfoSec = styled.div`
color: #fff;
height: 67vh;
padding: 160px 0;
position: relative;
background: ${({lightBg}) => (lightBg ? '#f0f0f0' : '#8000ff')};
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
position: absolute;
width: 66%;
z-index: 2;
`;


export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width:33%;
flex-basis:33%;

@media screen and (max-width: 768px) {
    max-width:100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;


export const ContentColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width:66%;
flex-basis:66%;

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
color: ${({lightTopLine}) => (lightTopLine ? '#8000ff' : '#444444')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#fff' : '#8000ff')};
`;

export const Subtitle = styled.p`
max-width: 450px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#8000ff')};
`;

export const SubtitleTwo = styled.p`
max-width: 100%;
margin-left: 10%;
margin-bottom: 128px;
font-size: 28px;
line-height: 30px;
color: ${({lightTextDescTwo}) => (lightTextDescTwo ? '#fff' : '#8000ff')};
`;

//Featured Image Column

export const FeaturedCard = styled(Link)`
  display: ${({wantImg}) => (wantImg ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: ${({promoted}) => (promoted ? '#fff' : 'rgba(255,255,255,0)')};
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 100%;
  height: 318px;
  text-decoration: none;
  border-radius: 18px;
  border: ${({promoted}) => (promoted ? '1px solid #fff' : 'rgba(255,255,255,0)')};
  position: relative;
  cursor: ${({promoted}) => (promoted ? 'pointer' : 'default')};
  
  &:hover {
      border: ${({promoted}) => (promoted ? '1px solid #cfcfcf' : 'rgba(255,255,255,0)')};
  }
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
margin-top: 4.5vh;
width: ${({extraBig}) => (extraBig ? '120%' : '100%')};
height: 700px;
display: inline-block;
border-radius: 14px;
object-fit: ${({promoted}) => (promoted ? 'cover' : 'contain')};
`;

