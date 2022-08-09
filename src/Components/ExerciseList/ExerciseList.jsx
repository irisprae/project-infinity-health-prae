import React from 'react'
import './ExerciseList.css'

const ExerciseList = (props,handleDelete,addAct) => {

  console.log(props)

  return (
    <div className='exerciseList'>

	<div
 className = 'exerciseListContainer'>
          <h2 className = 'createAct' onClick={() => addAct}>+ Create yor activities<br/></h2>


          <div className="addCardAct">

        <button  className="addCardActText">+ Tap here to add your activity<br/></button>

          </div>

      {props.card.map(({ id, activity, distance,durationHours,durationMin,date,calories,heartrate,description }) => {
        return(
          /*<><li key={id}></li><button className ="deleteActButton" onClick={() => handleDelete(id)}>X</button>*/
          <div className="cardAct">
            <div className="cardActName">
              <div><span className='boldFont'>Run to Forget Christine (again)</span></div>
              <div className="cardActType"><span className='boldFont'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {activity}</span></div>
            </div>

            <div>
              <p className="cardActDuration"><span className='boldFont'>Duration:</span> <span>{durationHours} Hour {durationMin} Minutes</span></p>
              <p className="cardActCalories">{calories}</p>
              <p className="cardActDes">{description}</p>
              <p className="cardActAdddate">added activity on {date}.</p>
              <p className="cardActCompletedDate">completed on {date}.</p>
              <p>id {id} distance {distance}  heart {heartrate}</p>
            </div>
              <button className ="deleteActButton" onClick={() => handleDelete(id)}>X</button>
          </div>/*</>*/
          )}
          )
      }
    
    </div>

        </div>
  )

  
        


}

export default ExerciseList