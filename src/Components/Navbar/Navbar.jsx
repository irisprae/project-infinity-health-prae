import {Link,Route} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="Nav">
          <div className="Nav__container">
            {/* <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link> */}

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/overview">Overview</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Addactivities">Activities</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path3">Link 3</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
