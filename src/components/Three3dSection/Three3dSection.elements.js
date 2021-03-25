import { Link } from 'react-router-dom';
import styled from 'styled-components';


//Info Column

export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
background: ${({lightBg}) => (lightBg ? '#d1d1d1' : '#94ff94')};
position: relative;
height: 520px;
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
position: absolute;
margin-top: -200px;
`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
height: 400px;
max-width: ${({shrink}) => (shrink ? '33%' : '')};
flex-basis: ${({shrink}) => (shrink ? '33%' : '')};
display: ${({single}) => (single ? 'none' : 'block')};

@media screen and (max-width: 768px) {
    max-width:100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;
