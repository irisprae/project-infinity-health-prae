import React from 'react'
import './ExerciseList.css'

const ExerciseList = (props,handleDelete,addAct) => {
  return (
    <div className='ExerciseList'>
        //ExerciseList

                <div>

              <div className = 'exerciseList'>
          <h4 className = 'createAct' onClick={() => addAct}>+ Create yor activities<br/></h4>


          <div className="addCardAct">

        <p  className="addCardActText">+ Tap here to add your activity<br/></p>

          </div>

      {props.card.map(({ id, activity, distance,durationHours,durationMin,date,calories,heartrate,description }) => {
        return(
          <><li key={id}></li><button onClick={() => handleDelete(id)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</button><div className="cardAct">
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
          </div></>
          )}
          )
      }
    
    </div>
    </div>
        </div>
  )

  
        


}

export default ExerciseList