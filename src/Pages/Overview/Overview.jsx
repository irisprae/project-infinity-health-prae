import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import RightSection from '../../Components/RightSection/RightSection'
import CalPic from './CalPhotoRoom.png'
import StepPic from './StepPhotoRoom.png'
import ActPDayPic from './ActPdayRBG.png'
import WaterPic from './WaterPhotoRoom.png'
import RunningPic from './run-platinum.png'
import RunningGold from './run-gold2.png'
import RunningSilver from './run-silver2.png'
import RunningBrass from './run-brass2.png'
import OverviewCard from '../../Components/OverviewCard/OverviewCard'
import './Overview.css'


const Overview = () => {
  let Calories = 285;
  let WalkRun = 1025;
  let ActivitiesPerDay = 1.30;
  let Water = 1.5;
  
  //assume today is 31/07/2022

  //SQL get lastest 3 card 
  const lastestcard = [{
    id:'0',
    actname:'name0',
    activity:'running',
    distance:5,
    durationHours:'2',
    durationMin:'30',
    date:'29/07/2022',
    calories:'1000',
    heartrate:80,
    description:'วิ่งเพื่อลืมคริสทีน',
    },{
    id:'1',
    actname:'name1',
    activity:'walking',
    distance:5,
    durationHours:'5',
    durationMin:'45',
    date:'30/07/2022',
    calories:'2000',
    heartrate:70,
    description:'walk for who?',
    }]


  //SQL get today card

  const todaycard = [{
    id:'2',
    actname:'name2',
    activity:'running',
    distance:5,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'run for who? again',
    },{
    id:'3',
    actname:'name3',
    activity:'running',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    }]

  return (
    <div className='OverviewArea'>
      <div className='NavbarSection'><Navbar /></div>
      <div className='MiddleSection'>
        <div className='LastestSection'>
          <div className='OverviewBold'>Latest Activities</div>
          <div><OverviewCard card = {lastestcard}/></div>
        </div>
        <div className='TodaySection'>
          <div className='OverviewBold'>Today Activities</div>
          <div><OverviewCard card = {todaycard}/></div>
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
              <div>activities/day</div>
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
          
          <div className=''></div>
          <div className='ChallengeBoard'>

            <div className='ChallengeLeft'>
              <h4>Challenge</h4>
              <div className='ChallengeWeekly'>
                <div className='StatusImg RunningPic'>{/*Card Image Here*/}<img src={RunningPic} /></div>
                <div>
                  <h4>Run platinun</h4>
                  <div>10000 / 100000 km.</div>
                </div>
              </div>
            </div>

            <div className='ChallengeRight'>
              <h4>Weekly Challenge</h4>
              <div className='ChallengeWeekly'>
                <div className='StatusImg RunningPic'>{/*Card Image Here*/}<img src={RunningPic} /> </div>
                <div>
                  <h4>Run beginner</h4>
                </div>
              </div>
            </div>

          </div>

          <div className='TrophyBoard'>
            <h4 className='TrophyHead'>Trophy</h4>
            
            <div className='TrophyCard'>
              <div className='StatusImg RunGold'>{/*Card Image Here*/}<img src={RunningGold} /> </div>
              <div>
                <h4>Running 10000 km.</h4>
                <p>Unlocked 29 Jun, 2022 @ 17:35</p>
              </div>
            </div>

            <div className='TrophyCard'>
              <div className='StatusImg RunSilver'>{/*Card Image Here*/}<img src={RunningSilver} /> </div>
              <div>
                <h4>Running 4000 km.</h4>
                <p>Unlocked 19 Mar, 2022 @ 19:02</p>
              </div>
            </div>

            <div className='TrophyCard'>
              <div className='StatusImg RunBrass'>{/*Card Image Here*/}<img src={RunningBrass} /> </div>
              <div>
                <h4>Running 1000 km.</h4>
                <p>Unlocked 15 Jan, 2022 @ 18:40</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className = "Right"><RightSection /></div>
    </div>
  )
}
 
export default Overview