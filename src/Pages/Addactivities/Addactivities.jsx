import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExerciseList from "../../Components/ExerciseList/ExerciseList";
import ExerciseForm from "../../Components/ExerciseForm/ExerciseForm";

import "./Addactivities.css";

const Addactivities = () => {

  const exerciseList = [{
    id:'0',
    activity:'run',
    distance:5,
    durationHours:'2',
    durationMin:'30',
    date:'29/07/2022',
    calories:'1000',
    heartrate:80,
    description:'วิ่งเพื่อลืมคริสทีน',
    },{
    id:'1',
    activity:'walk',
    distance:5,
    durationHours:'5',
    durationMin:'45',
    date:'30/07/2022',
    calories:'2000',
    heartrate:70,
    description:'walk for who?',
    },{
    id:'2',
    activity:'run',
    distance:5,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'run for who? again',
    },
  {
    id:'3',
    activity:'run',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    },
  {
    id:'4',
    activity:'run',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    },
  {
    id:'5',
    activity:'run',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    },
  {
    id:'6',
    activity:'run',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    },
  {
    id:'7',
    activity:'run',
    distance:500000,
    durationHours:'3',
    durationMin:'20',
    date:'31/07/2022',
    calories:'1500',
    heartrate:85,
    description:'runnnnnnnnnnnnnnnnnnn? again',
    }];


        const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
    }

    const addAct = () =>{}


  return (
    <div className="Addactivities">
      <div className="BodyAct">
        <Navbar />
        <ExerciseList 
        exerciseList = {exerciseList} 
        handleDelete = {handleDelete} 
        addAct = {addAct}
        />
        
        <ExerciseForm />
      </div>
    </div>
  );
};

export default Addactivities;
