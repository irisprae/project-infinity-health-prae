import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExerciseList from "../../Components/ExerciseList/ExerciseList";
import ExerciseForm from "../../Components/ExerciseForm/ExerciseForm";
import { getActivity, deleteActivity, editActivity} from "../../api/activity";
import "./Addactivities.css";
import RightSection from "../../Components/RightSection/RightSection";

const Addactivities = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  // const [getActivity, setGetActivity] = useState([]);

  const getExerciseList = async () => {
    // setActivities(props.Dateselect)
    if (!allTasks) {
      return;
    }
    const response = await getActivity();
    console.log(allTasks);
    // if (!response.data?.result?.length) return
    setAllTasks(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getExerciseList();
  }, []);


  const handleDelete = (taskIdToRemove) => {
   deleteActivity(taskIdToRemove)
    return setAllTasks((prev) =>
      prev.filter((task) => task._id !== taskIdToRemove)
    )
  };

  const addAct = () => {
    setIsShow((prevIsShow) => !prevIsShow);
    setIsEdit(false);
  };

  const handleEdit =  (_id) => {
    setEditId(_id)
    setIsEdit(true)
    setIsShow(true)
    return editActivity();
  };

  const closeEdit = () => {
    setIsShow(false)
    setIsEdit(false)
    setEditId("")
  }
let editingActivity
  if (editId) {
    editingActivity = allTasks.find((task) => task._id === editId);

  }

  return (
    <div className="Addactivities">
      <div className="NavbarSection">
        <Navbar />
      </div>
      <div className="BodyAct">
        {allTasks.length > 0 && (
          <ExerciseList
            exerciseList={allTasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            addAct={addAct}
          />
        )}
        {isShow ? <ExerciseForm isEdit={isEdit} editId={editId} editingActivity={editingActivity} closeEdit={closeEdit} /> : <RightSection />}
      </div>
    </div>
  );
};

export default Addactivities;
