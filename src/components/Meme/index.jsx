import React from 'react'
import "./Meme.css"

const Meme = () => {
    return(
        <div className='container-meme'>
            <div className="top">
                <img src="/borpelon.gif" alt="" />
                <img src="/robot-reaction-eww.gif" />
                <img src="/ponkesol-ponke.gif"  />
                
            </div>
            <div className="bot">
                <img src="/the-rock-dwayne-johnson.gif"  />
                <img src="/ai-artifical-intelligence.gif"  />
                <img src="/ponke-ponkesol.gif"  />
            </div>
        </div>
    )
}

export default Meme