import React from 'react'
import "./OverviewCard.css"
import boxPic from './boxing2.png'
import cycPic from './cycling2.png'
import dancPic from './dancing2.png'
import hikPic from './hiking2.png'
import runPic from './running2.png'
import swimPic from './swimming2.png'
import walkPic from './walking2.png'
import yogaPic from './yoga2.png'
let typeSRC ='B';
const OverviewCard = (props) => 
 {console.log(props)
   
  
    return (
      <div className='cardList'>
         <div className = 'OverviewCardContainer'>
             {props.card.map(({ id, actname, activity, distance,durationHours,durationMin,date,calories,heartrate,description }) => 
             { if(activity=='running') {
                 typeSRC = runPic;
                }else if(activity=='walking'){
                 typeSRC = walkPic;
                }else if(activity=='cycling'){
                  typeSRC = cycPic;
                }else if(activity=='hiking'){
                  typeSRC = hikPic;
                }else if(activity=='swimming'){
                  typeSRC = swimPic;
                }else if(activity=='boxing'){
                  typeSRC = boxPic;
                }else if(activity=='dancing'){
                  typeSRC = dancPic;
                }
                else{
                  typeSRC = yogaPic;
                } 

                return(
                  <div className="OverviewC">
                    <div className="OC1">
                     <div className='TypePic'>
                     <img src={typeSRC} />
                       {/* <span>{typeSRC}</span> //For test
                       <span>{activity}</span> */}
                     </div>
                       <div className='OC1Right'>
                         <div className='NameC'><span className='boldFont'>{actname}</span></div>
                         <div className="DetailC"><span>{description}</span></div>
                       </div>                
                      </div>
  
                      <div className="OC2">
                       <div>
                         <p className="DurationC"><span>Duration:</span> <span>{durationHours} Hr. {durationMin} min.</span></p>
                         <p className="DateC">Date: {date}.</p>
                         {/*<p className="cardActCompletedDateC">Time: {date}.</p>*/}
                         <p className="CaloriesC">{calories} calories</p>
                       </div>
                       <div className='ActPic'></div>
                      </div>
                   </div>
                )
              }
              )}
         </div>
  
      </div>
    )
  
 }
  export default OverviewCard