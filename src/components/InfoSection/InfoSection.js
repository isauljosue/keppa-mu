import React from 'react';

import {Link} from 'react-router-dom';
import {InfoSec, InfoRow, InfoColumn, ContentColumn, TextWrapper, TopLine, Heading, Subtitle,SubtitleTwo, FeaturedCard, FeaturedCardInfo, FeaturedVisual, Visual, PromotedIcon, FeaturedTitle, FeaturedDescription} from './InfoSection.elements';
import {Container, LinkArrowButton } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { TiStar } from 'react-icons/ti';


const InfoSection = ({primary, lightBg, imgStart, topLine, lightTopLine, lightText, wantImg, lightTextDesc, buttonLabel, description, descriptionTwo, lightTextDescTwo, extraBig, headline, start, topspacing, featuredLink, isLink, featuredImg, featuredTitle, featuredDescription, promoted, shortDesc, threeDee }) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#444', size: 35 }}>
            <InfoSec lightBg={lightBg}>
                <Container topspacing={topspacing}>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <LinkArrowButton shortDesc={shortDesc} big fontBig primary={primary} isLink={isLink}>
                                        {buttonLabel}👉
                                    </LinkArrowButton>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <ContentColumn>
                        <IconContext.Provider value={{ color: '#fff', size: 20 }}>
                            <FeaturedCard wantImg={wantImg} to={featuredLink} start={start} promoted={promoted}>
                                <Visual promoted={promoted} extraBig={extraBig} src={featuredImg} alt={featuredTitle} />
                            </FeaturedCard>
                            <SubtitleTwo lightTextDescTwo={lightTextDescTwo}>{descriptionTwo}</SubtitleTwo>
                        </IconContext.Provider>
                        </ContentColumn>
                    </InfoRow>
                </Container>
                {threeDee}
            </InfoSec>
        </IconContext.Provider>
        </>
    );
};

export default InfoSection;
