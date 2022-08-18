import { Link, Route } from "react-router-dom";
import React from "react";
import Facebook from "./facebook-icon.png";
import Twitter from "./twittter-icon.png";
import Instagram from "./instagram-icon.png";
import Situp from "./situp.png";
import Running from "./running.png";
import Dashboard from "./infinity-dashboard.png";
import Card from "./infinity-card.png";
import Trophy from "./infinity-trophy.png";
import "./InfiniteBody.css";

const InfiniteBody = () => {
  return (
    <div id="home">
      {/* Hero */}
      <div className="hero">
        <div className="heroLeftText">
          <h1>Health tracking and challenging become one!</h1>
          <p className="heroDescription">
            We help keep tracks your daily excercises and achievements. Still
            bored of your mundane going-to-the-gym excercises? We have plenty of
            fun challenges for you!
          </p>
          <Link to="/SignUp">Register Now ⎘</Link>
          <p className="connect">Connect with us:</p>
          <div className="heroLeftIcons">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
          </div>
        </div>
        <div className="heroRightImage">
          <div className="blueCard">
            <img src={Situp} className="sitUp" />
            <img src={Running} className="running" />
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div id="feature" className="feature">
        <h1>Our Highlights</h1>
        <div className="dashboardMain">
          <p>
            <strong>Insightful dashboard:</strong>
            <br />
            We keep track of your physical measurements, activities and
            milestones, and upcoming events.
          </p>
          <img src={Dashboard} />
        </div>
        <div className="dashboardCard">
          <img src={Card} />
          <p>
            <strong>Activities:</strong>
            <br />
            We handpick several exercises and activities for you to record as
            you are thriving to unlock your milestones provided with duration
            and calories count.
          </p>
        </div>
        <div className="dashboardForm">
          <p>
            <strong>Challenges:</strong>
            <br />
            Turn your routine exercises into fun and exciting challenges!
            Collect your burning hours to unlock badges and throphies. You don’t
            have to be famous to earn a Hall of Fame of your own!
          </p>
          <div className="formImage">
            <img src={Trophy} />
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonial">
        <h1>Hear what our users say:</h1>
      </div>
      
    </div>
  );
};

export default InfiniteBody;
