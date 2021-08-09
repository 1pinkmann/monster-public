import './style.css';

const ButtonApply = ({ text }) =>{
  return <>
  <div className="container ButtonApply">
    <div className="ButtonApply__wrapper">
      <div className="col-12 col-md-8 col-lg-6">
        <a href="#form2"><button>{text}</button></a>
      </div>
    </div>
  </div>
  </>
}

export default ButtonApply