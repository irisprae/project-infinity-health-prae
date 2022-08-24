import { Link, Route } from "react-router-dom";
import HearthPic from "./NavPics/Hearth 3.png";
import OverviewPic from "./NavPics/Overview 3.png";
import ActivitiesPic from "./NavPics/Activities 2.png";
import CommunityPic from "./NavPics/Community 2.png";
import ChallengePic from "./NavPics/Challenge 2.png";
import SettingPic from "./NavPics/Setting.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="Nav">
        <div className="Nav__container">
          {/* <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link> */}

          <div className="Nav__right">
            <dl className="Nav__item-wrapper">
              <dd className="Nav__item__top">
                <center>
                  <img src={HearthPic} className="Nav__logo" />
                </center>
              </dd>
              <dd className="Nav__item">
                <img src={OverviewPic} className="Nav__logo" />
                <Link className="Nav__link" to="/Overview">
                  <h4>Overview</h4>
                </Link>
              </dd>
              <dd className="Nav__item">
                <img src={ActivitiesPic} className="Nav__logo" />
                <Link className="Nav__link" to="/Addactivities">
                  <h4>Activities</h4>
                </Link>
              </dd>
              {/* <dd className="Nav__item">
                <img src={CommunityPic} className="Nav__logo" />
                <Link className="Nav__link" to="/Community">
                  <h4>Community</h4>
                </Link>
              </dd>
              <dd className="Nav__item">
                <img src={ChallengePic} className="Nav__logo" />
                <Link className="Nav__link" to="/Challenge">
                  <h4>Challenges</h4>
                </Link>
              </dd> */}
              {/* <dd className="Nav__item">
                <img src={SettingPic} className="Nav__logo" />
                <Link className="Nav__link" to="/Setting">
                  <h4>Settings</h4>
                </Link>
              </dd> */}
            </dl>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
