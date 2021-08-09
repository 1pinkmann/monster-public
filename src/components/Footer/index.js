import './style.css';
import logo from '../../assets/img/logo.svg'; 
import instagram from '../../assets/img/Instagram.svg'; 
import facebook from '../../assets/img/facebook.svg'; 
import pinterest from '../../assets/img/pinterest.svg'; 

const Footer = () =>{
  return <>
  <div className="container footer">
    <hr align="left" width="100%" color="#A5ABB2"></hr>
    <div className="row justify-content-between">
      <div className="col-12 col-md-2">
        <a href="https://www.monstereducation.com/"><img className="logo" src={logo} alt="logo" /></a>
       
      </div>
      <div className="col-12 col-md-7 text">
        <small>© 2021 Monster Education. All rights reserved.</small>
      </div>
      <div className="col-12 col-md-3 social">
        <a href="https://www.instagram.com/themonstereducation/"><img src={instagram} alt="instagram" /></a>
        <a href="https://www.facebook.com/themonstereducation"><img src={facebook} alt="facebook" /></a>
        <a href="https://www.pinterest.com/MonsterEducation/_created/"><img src={pinterest} alt="pinterest" /></a>
      </div>
    </div>
  </div>
  </>
}

export default Footer