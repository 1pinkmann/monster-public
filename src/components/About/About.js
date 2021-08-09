import './about.css';
import block4img1 from '../../assets/img/Comedy_Stand.svg';
import block4img2 from '../../assets/img/Publik_Speaking.svg';
import block4img3 from '../../assets/img/Writing_1st_newcolor.svg';

const About = () => {
  return <>
    <div className="container about">
      <h2 className="about__title">Our Courses</h2>
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 about__card">
          <img src={block4img1} alt="illustration" />
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 about__card">
          <h2 className="about__card-title">Public Speaking Through Stand Up Comedy Course</h2>
          <p>Your child will gain confidence in public speaking and have fun learning stand up comedy with an <b>LA comedian and accredited educator</b>. Students will master story-telling, nonverbal communication, humor and overcome speech anxiety as they develop their personality and make new friends.<br /> <br />
          Meeting <b>once a week for 40 minutes for the duration of 8 weeks</b>, this small group course (4-6 students) will teach kids how to develop jokes (K-2nd grade) and a stand up comedy routine (3-5th grade) for their final showcase.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 section-1 about__card">
          <h2 className="about__card-title">Public Speaking <br /><b>“Toastmasters”</b> Style Course</h2>
          <p>
            Is your child ready to take the first step toward learning how to give speeches and debating? Students will gain public speaking confidence and master the techniques to speak in front of classmates, teachers, and adults sending a powerful message that captivates an audience. <br />
            <br />
            Meeting <b>once a week for 40 minutes for the duration of 8 weeks</b>, this small group course (4-6 students) will teach kids how to give introductions, lead impromptu talks, and to prepare a speech for their final showcase project.
          </p>
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 section-2 about__card">
          <img src={block4img2} alt="illustration" />
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 about__card">
          <img src={block4img3} alt="illustration" />
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 about__card">
          <h2 className="about__card-title">CEO of Your Life Coaching Course</h2>
          <p>
            In this key life-skills course, your child will learn techniques to envision dreams, assess problems, understand emotions, and to take action. Boost confidence, emotional intelligence, leadership skills, and mindfulness techniques that benefit your child for a lifetime.
            <br/>
            <br/>
            This small group (4-6 kids) coaching course will take place <b>once a week for 40 minutes for the duration of 8 weeks</b>.The class is led by certified life coach and children’s mindfulness instructor Evelina, based in sunny Honolulu.
        </p>
        </div>
      </div>

    </div>
  </>
}

export default About