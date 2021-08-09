import './teachers.css';
import BioCard from '../bio-card';

import Paul from '../../assets/img/Paul.jpg'
import Jaquita from '../../assets/img/Jaquita.jpg'
import Evelina from '../../assets/img/Evelina.jpg'

const textForPaul = "LA actor and comedian Paul brings an element of laughter, fun, and boosts kids confidence when coaching public speaking through stand-up comedy. Paul has several decades experience in child and adult education. He began his career as a stand-up comedian at the age of 18 and continues to work  in film and TV shows. He graduated from San Francisco State University Cinema and Theater program. "
const textForJaquita = "Ms. Jaquita, M.Ed specializes in helping students learn self-regulation strategies to increase reading comprehension and strengthen writing skills. She has over seven years of teaching experience in reading, composition and literature. Ms. Jaquita possesses a Bachelor of Arts in English, as well as a Masters in Education. She is a mother of two children that she homeschools. In her free time, she loves to read, to bake and to be outside in nature."
const textForEvelina = "Certified life coach Evelina, based in sunny Honolulu, incorporates mindfulness approaches to empower children in a fun and engaging way. A lifelong-learner passionate about personal development, she holds a BA and a Master’s degree in Business Administration and has been exposed to multicultural environments working in Europe and the US, as well as through extensive travels and study in Asia. Her 4 nieces and nephews are her source of inspiration for continuous growth and love."

const Teachers = () => {
  return <>
    <div className="container teachers">
      <h2>Featured Instructors and Coaches:</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 teachers__card">
          <BioCard image={Paul} text={textForPaul} title="Paul" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 teachers__card">
          <BioCard image={Jaquita} text={textForJaquita} title="Jaquita" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 bio teachers__card">
          <BioCard image={Evelina} text={textForEvelina} title="Evelina" />
        </div>
      </div>
    </div>
  </>
}

export default Teachers