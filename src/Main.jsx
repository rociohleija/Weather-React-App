import React from 'react';
import cloudy_sky from './cloudy_sky.mp4'

const Main = () => {
    return (
        <div className= 'main'>
            <video src ={cloudy_sky} autoPlay loop muted />
        </div>
    )
}

export default Main