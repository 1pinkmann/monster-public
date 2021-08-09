import './style.css'
import clip from '../../assets/video/header.mp4'
import logo from '../../assets/img/logo.svg'
import FormContainer from '../../containers/Form/index.js'

const Header = ({setShowForm}) => {
  return <>
    <div className="bg-video">
      <video autoPlay loop muted>
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video>
      <div className='container bg-video__wrapper'>
        <div className="bg-video__columns">
          <div className="bg-video__column">
            <a href="https://www.monstereducation.com/" className="logo-link">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <div className="title">
              <h1>Public Speaking & Life Skills K-5</h1>
              <p>
                Boost your child’s confidence, develop their personality & leadership skills, help them make new friends, and more.
              </p>
            </div>
          </div>
          <div className="bg-video__column">
            <FormContainer setShowForm={setShowForm} id="form-header" />
          </div>
        </div>

      </div>
    </div>
  </>
}

export default Header
