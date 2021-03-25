import React from 'react';

import {Link} from 'react-router-dom';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, FeaturedCard, FeaturedCardInfo, FeaturedVisual, Visual, PromotedIcon, FeaturedTitle, FeaturedDescription} from './TextPortion.elements';
import {Container, LinkArrowButton } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { TiStar } from 'react-icons/ti';


const TextPortion = ({primary, lightBg, imgStart, topLine, lightTopLine, lightText, lightTextDesc, buttonLabel, description, headline, start, topspacing, featuredLink, featuredImg, featuredTitle, featuredDescription, promoted, shortDesc }) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#444', size: 35 }}>
            <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            </TextWrapper>
        </IconContext.Provider>
        </>
    );
};

export default TextPortion;
