import React from "react";
import "./RightSection.css";
import NoPic from "./NoPic2.png";
import Calendar from "../Calendar/Calendar";
import Logout from "../../Pages/LogOut/LogOut.jsx";

const RightSection = () => {
  let height = 100;
  let weight = 40;
  let HeightUnit = "cm";
  let WeightUnit = "kg";
  const bmi = weight / ((height / 100) * (height / 100));

  let name = "NameGOHere";
  let email = "@MailGoHere";

  return (
    <div>
      <div className="RightSection">
        <div className="ProfileSection">
          <div className="ProfileHeader">
            <div>
              <div className="TopicIcon"></div>
            </div>
            <div className="ProfileBar">
              <div className="Topic">Profile</div>
              <button className="editButton">edit</button>
            </div>
          </div>
          <div className="ProfilePic">
            <div className="InnerBolderPic">
              {/* <img src='/images/image1.jpg' /> */}
              <img src={NoPic} />
            </div>
          </div>
          <div className="NameTag">
            {" "}
            <div className="UserName">{name}</div>{" "}
            <div className="MailName Grey">{email}</div>{" "}
          </div>
          <div className="UserInfo">
            <div className="height">
              <div className="Grey">Height</div>{" "}
              <div>
                {height} {HeightUnit}
              </div>{" "}
            </div>
            <div className="weight">
              <div className="Grey">Weight</div>{" "}
              <div>
                {weight} {WeightUnit}
              </div>{" "}
            </div>
            <div className="bmi">
              <div className="Grey">BMI</div> <div>{bmi}</div>{" "}
            </div>
          </div>
        </div>
        <div className="CalendarSection">
          <div className="CalendarHeader">
            <div className="TopicIcon"></div>
            <div className="CalendarTitle">Calendar</div>
          </div>
          <div className="reactCalendar">
            <Calendar />
          </div>
        </div>
        <div className="SignOut">
          <div className="SignOutHero">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
