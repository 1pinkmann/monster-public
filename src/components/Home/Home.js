import './home.css';
import publicVideo from '../../assets/video/public-video.mp4';
import Poster1 from '../../assets/img/public-video-poster.jpg'
import Slider from "react-slick";
import checkVideoInViewport from '../../services/checkVideoPosition';
import { useEffect, useRef } from 'react';
import useVideo from '../../hooks/useVideo';
import logo from '../../assets/img/logo.svg'
import FormContainer from './../../containers/Form/index';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Home = ({setShowForm}) => {

    let { handleVideoPause, handleVideoPlay } = useVideo();

    let videoRefs = useRef([]);

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    function stopVideo(i) {
        let videoElements = videoRefs.current;
        videoElements[i + 1].pause();
    }

    return (
        <div className="container home">
            <a href="https://www.monstereducation.com/" className="logo-link">
                <img className="logo" src={logo} alt="logo" />
            </a>
            <h1 className="home__title">Public Speaking & Life Skills K-5</h1>
            <p className="home__text">
                Boost your child’s confidence, develop their personality & leadership skills, help them make new friends, and more.
            </p>
            <div className="row home__columns">
                <div className="col-10 col-lg-6 section-1 home__column">
                    <Slider beforeChange={stopVideo} {...settings}>
                        <div>
                            <div className="video" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                                <video ref={el => videoRefs.current.push(el)} preload="metadata" controls="controls" poster={Poster1} playsInline>
                                    <source src={publicVideo} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </Slider>
                    <div className="home__fit">
                        <h2 className="home__fit-title">A great fit for your child, if:</h2>
                        <div className="text home__fit-text">
                            <p className="home__fit-item">You seek personalized small group learning (up to 6 students per class)</p>
                            <p className="home__fit-item">Your child is in grade K through 5</p>
                            <p className="home__fit-item">Your child wants to gain confidence in public speaking & self-expression </p>
                            <p className="home__fit-item">You’re interested in Stand Up Comedy, Toastmasters, or life skills coaching</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 section-2 home__column">
                    <FormContainer setShowForm={setShowForm} id="form-header" />
                </div>
            </div>
        </div>
    )
}

export default Home
