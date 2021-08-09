import './reviews.css';
import Cover1 from '../../assets/img/Cover-1.jpg';
import Cover2 from '../../assets/img/Cover-2.jpg';
import Cover3 from '../../assets/img/Cover-3.jpg';
import Quote from '../../assets/img/Quote.svg';

const Reviews = () => {
  return <>
  <div className="cover-bg">
    <img className="quote" src={Quote} alt="Teacher" />
    <div className="container reviews">
      <h2 className="reviews__title">Parent Reviews</h2>
      <div className="row">
        <div className="col-12 col-lg-4 ">
          <div className="card-feedback">
            <img src={Cover1} alt="Teacher" />
            <h4>- Natasha C., attorney & mom, Los Angeles, CA</h4>
            <p>“I cannot rave about Monster Education enough. Learning on zoom has been a challenge for our 1st grader as she is very hands on and interactive. On Monster Education, the teachers are unparalleled. My daughter is excited when it’s class time. The small class size keeps it from feeling overwhelming. I would sign up for any Monster Education class offered without hesitation.”
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 ">
          <div className="card-feedback">
            <img src={Cover2} alt="Teacher" />
            <h4>- Anna F., entrepreneur & mom of three, Santa Monica, CA</h4>
            <p>“What sets Monster Education apart is its professional curation and vetting of high quality teachers. That’s a game-changer. I can trust that my kids will learn from outstanding teachers providing an effective and engaging curriculum - with the added bonus that it’s so convenient and makes my life easier, too!​”
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 ">
          <div className="card-feedback">
            <img src={Cover3} alt="Teacher" />
            <h4>- Ariane Klein, mom of two, Los Angeles, CA</h4>
            <p>“My daughter has taken many Monster Education classes and I love that the teachers are all extremely knowledgeable and enthusiastic, groups are small and participation is seamlessly facilitated. I have been able to tailor classes to my daughter’s individual needs and sign up for classes with her friends. My daughter tends to push back with extra work, but this has not at all been the case with Monster Education.“
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}

export default Reviews