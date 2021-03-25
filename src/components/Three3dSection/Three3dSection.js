import React from 'react';

import {Link} from 'react-router-dom';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, FeaturedCard, FeaturedCardInfo, FeaturedVisual, Visual, PromotedIcon, FeaturedTitle, FeaturedDescription, ForBack} from './Three3dSection.elements';
import {Container, LinkArrowButton } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { TiStar } from 'react-icons/ti';
import { FrameCube } from '..';


const Three3dSection = ({primary, lightBg, imgStart, topLine, lightTopLine, lightText, lightTextDesc, buttonLabel, description, headline, start, topspacing, featuredLink, featuredImg, featuredTitle, featuredDescription, promoted, shortDesc, thirdOne, shrink, single, dissapear, frameCube, spacingOne, spacingTwo, spacingThree, toTheBack }) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#444', size: 35 }}>
            <InfoSec lightBg={lightBg}>
                {toTheBack}
                <Container topspacing={topspacing}>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn thirdOne={thirdOne} shrink={shrink} single={single}>
                            {spacingOne}
                        </InfoColumn>
                        <InfoColumn thirdOne={thirdOne} shrink={shrink} single={single}>
                            {spacingTwo}
                        </InfoColumn>
                        <InfoColumn thirdOne={thirdOne} shrink={shrink} single={single}>
                            {spacingThree}
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </IconContext.Provider>
        </>
    );
};

export default Three3dSection;
