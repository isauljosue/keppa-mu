import React from 'react';
import { welcomeSec, homeObjOne,homeObjTwo, homeObjThree, homeObjFour, homeObjFive, columnSec } from  './Data';
import {FrameCube, InfoSection, TopSection, Column, TickerLine, Three3dSection } from '../../components';


const Home = () => {
    return (
        <>
            <TopSection {...welcomeSec}/>
            <InfoSection {...homeObjOne} />
            <Three3dSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
        </>
    )
}

export default Home