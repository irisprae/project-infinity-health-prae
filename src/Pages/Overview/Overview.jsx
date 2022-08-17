import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import RightSection from '../../Components/RightSection/RightSection'
import CalPic from './CalPhotoRoom.png'
import StepPic from './StepPhotoRoom.png'
import ActPDayPic from './ActPdayRBG.png'
import WaterPic from './WaterPhotoRoom.png'
import './Overview.css'


const Overview = () => {
  let Calories = 285;
  let WalkRun = 1025;
  let ActivitiesPerDay = 1.30;
  let Water = 1.5;

  return (
    <div className='OverviewArea'>
      <div className='NavbarSection'><Navbar /></div>
      <div className='MiddleSection'>
        <div className='LastestSection'>
          <div>Latest Activities</div>
          <div>{/*Latest Activities Card Here*/}</div>
        </div>
        <div className='TodaySection'>
          <div>Today Activities</div>
          <div>{/*Today Activities Card Here*/}</div>
        </div>
        <div className='StatusSection'>

          <div className='StatusCard'>
            <div className='StatusImg CalImg'>{/*Card Image Here*/}<img src={CalPic} /> </div>
            <div>
              <div>{Calories} Kcal</div>
              <div>calories</div>
            </div>
          </div>
          
          <div className='StatusCard'>
            <div className='StatusImg StepImg'>{/*Card Image Here*/}<img src={StepPic} /> </div>
            <div>
              <div>{WalkRun} Steps</div>
              <div>walk-run</div>
            </div>
          </div>


          <div className='StatusCard'>
            <div className='StatusImg ActImg'>{/*Card Image Here*/}<img src={ActPDayPic} /> </div>
            <div>
              <div>{ActivitiesPerDay} Hrs</div>
              <div className='Grey'>activities/day</div>
            </div>
          </div>


          <div className='StatusCard'>
            <div className='StatusImg WaterImg'>{/*Card Image Here*/}<img src={WaterPic} /> </div>
            <div>
              <div>{Water} Liters</div>
              <div>water</div>
            </div>
          </div>


        </div>
        <div className='TrophySection'>
          <div className='ChallengeBoard'>
          <p>Challenge</p>
            <div></div>
            <div></div>
          </div>
          <div className='TrophyBoard'>
            <p>Trophy</p>
            </div>
        </div>
      </div>
      <div className = "Right"><RightSection /></div>
    </div>
  )
}

export default Overview