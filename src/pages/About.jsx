
import woo from "../images/image.jpg";
import small from "../images/about-home.jpg";
import "../pages/About.css";

function About() {
  const small1 = {
    backgroundImage: `url(${small})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem",
    width: "15rem",
    marginLeft: "18rem",
    marginTop: "13rem",
  };

  const containerStyle1 = {
    backgroundImage: `url(${woo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20rem",
    width: "30rem",
    marginTop: "1rem",
    marginLeft: "3rem",
  };

  return (
    <div>
      <section className="backgroundabout1">
        <div className="contenttour1">
          <h1 className="contetour2" style={{color:"white"}}>About us</h1>
        </div>
      </section>
      <div className="sec-wp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-wp">
               
                <div
                  style={containerStyle1}
                  className="about-image-box small wow fadeup-animation"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div style={small1} className="about-image back-image"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content wow left-animation"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="line-title">
                  <h4 className="h4-title">About us</h4>
                </div>
                <h2 className="h2-title">
                  Plan Your <span>Trip</span> with <span>Us</span>
                </h2>
                <div className="about-content-text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts; it is an almost unorthographic. Italic Mountains, she
                    had a last view back on the skyline.
                  </p>
                </div>
                <a href="about.html" title="Read More" className="sec-btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
