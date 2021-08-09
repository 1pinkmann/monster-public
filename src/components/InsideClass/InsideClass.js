import './inside-class.css';

import video1 from '../../assets/video/inside-class-1.mp4';
import video2 from '../../assets/video/inside-class-2.mp4';

import poster1 from '../../assets/img/inside-class-1.jpg';
import poster2 from '../../assets/img/inside-class-2.jpg';

import React, { useEffect, useRef } from 'react'
import useVideo from './../../hooks/useVideo';
import checkVideoInViewport from '../../services/checkVideoPosition';


export default function InsideClass() {

    let { handleVideoPlay, handleVideoPause } = useVideo();

    let videoRefs = useRef([]);

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    return (
        <div className="inside-class container">
            <h2 className="inside-class__title">Inside the Class</h2>
            <div className="inside-class__videos">
                <div className="video inside-class__video" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <video ref={el => videoRefs.current.push(el)} preload="metadata" controls="controls" playsInline  poster={poster1}>
                        <source src={video1} type="video/mp4" />
                    </video>
                </div>
                <div className="video inside-class__video" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <video ref={el => videoRefs.current.push(el)} preload="metadata" controls="controls" playsInline poster={poster2}>
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
