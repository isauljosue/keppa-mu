import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {FooterContainer, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinksItems, 
        FooterLink, 
        FooterLinkTitle, 
        FooterBoxTitle,
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights, 
        SocialIcons, 
        KeppaLettering,
        SocialIconLink} from './Footer.elements';
import MarkadoLogoM from '../../assets/images/keppa-logo-01.svg';
import MarkadoLogoComplete from '../../assets/images/keppa-logo-01.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterBoxTitle><img src={MarkadoLogoComplete} alt="logo" /></FooterBoxTitle>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>
                        <FooterLinkTitle>Careers</FooterLinkTitle>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>2021 Keppa M.U.</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    ) 
}

export default Footer
