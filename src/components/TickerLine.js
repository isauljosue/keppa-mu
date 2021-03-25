import React from 'react'
import Ticker from 'react-ticker'
import "../App.scss";

const MoveStuffAround = () => (
    <Ticker speed={10} style={{ paddingLeft: 60, width: 100 }}>
        {() => (
            <>
                <h1 style={{ paddingRight: "0.25em", backgroundColor: "#94ff94", marginTop: 60 }}>Organize. Visualize. Forecast.</h1>
            </>
        )}
    </Ticker>
)

export default MoveStuffAround