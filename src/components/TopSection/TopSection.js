import React from 'react';

import {Link} from 'react-router-dom';
import {WelcomeSection, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, FeaturedCard, FeaturedCardInfo, FeaturedVisual, Visual, PromotedIcon, FeaturedTitle, FeaturedDescription, SubtitleTwo} from './TopSection.elements';
import {Container, LinkArrowButton } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { TiStar } from 'react-icons/ti';
import { Wall } from '..';


const InfoSection = ({threeDee, primary, lightBg, imgStart,backColor, lightText, lightTextDesc, description, headline, shortDesc, descriptionTwo, lightTextDescTwo }) => {
    return (
        <WelcomeSection backColor={backColor}>
            <Container> 
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <SubtitleTwo lightTextDesc={lightTextDescTwo}>{descriptionTwo}</SubtitleTwo>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container> 
            {threeDee}
        </WelcomeSection>
    );
};

export default InfoSection;
