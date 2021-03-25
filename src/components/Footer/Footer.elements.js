import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
background-color: #fff;
padding:2rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 62vw;
margin-top:3vh;
height: 25vh;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`;


export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width:820px) {
    flex-direction:column;
} 
`;

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 550px;
box-sizing: border-box;
color: #8000ff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const FooterLinkTitle = styled.h2`
margin-bottom: 22px;
cursor: pointer;

margin-left: 25.5vw;

&:hover {
    color: #a953ff;
}
`;

export const FooterBoxTitle = styled.div`
margin-bottom: 16px;
float: left;
`;

export const FooterLink = styled(Link)`
color: #8000ff;
text-decoration: none;
margin-bottom: 0.5rem;
font-family: 'Inter', sans-serif;

&:hover {
    color: #8000ff;
}
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const WebsiteRights = styled.small`
color: #444;
margin-bottom: 16px;
margin-left: -6.75vw;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 120px;
`;

export const SocialIconLink = styled.a`
color: #444;
font-size: 24px;
`;

export const KeppaLettering = styled.h2`
color: #8000ff;
font-size: 32px;
`;