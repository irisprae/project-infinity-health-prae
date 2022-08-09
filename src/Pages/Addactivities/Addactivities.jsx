import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExerciseList from "../../Components/ExerciseList/ExerciseList";
import ExerciseForm from "../../Components/ExerciseForm/ExerciseForm";

import "./Addactivities.css";

const Addactivities = () => {
  return (
    <div className="Addactivities">
      <div className="BodyAct">
        <Navbar />
        <ExerciseList />
        <ExerciseForm />
      </div>
    </div>
  );
};

export default Addactivities;
