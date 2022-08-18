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
import Boss from "./testimonial-boss.jpg";
import Bas from "./testimonial-bass.jpg";
import Boy from "./testimonial-boy.png";
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
            <strong>Insightful Dashboard:</strong>
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
      <h1 className="review">Hear what our users say:</h1>
      <div className="testimonial">
        <div className="testiBoss">
          <img src={Boss} />
          <p>
            “Infinity Health helps me keep track of my excercise better with a
            user-friendly interface. The calendar feature is proven very useful
            and I never miss my planned activities!”
          </p>
          <span>Sorawid M.</span>

        </div>
        <div className="testiBas">
          <img src={Bas} />
          <p>
            “This website is easy to use and comes in handy. Infinity Health
            helps inspire me to keep on working out.”
          </p>
          <span>Korawit R.</span>
        </div>
        <div className="testiBoy">
          <img src={Boy} />
          <p>
            “Infinith Health is not only functional but also stylish. It
            motivates to exercise more and keep records of my achievements.”
          </p>
          <span>Thani Y.</span>
        </div>
      </div>
      <footer id="contact">
        <p>© Copyright 2022, Infinity Health Group</p>
        <p>infinityhealth@gmail.com</p>
      </footer>
    </div>
  );
};

export default InfiniteBody;
