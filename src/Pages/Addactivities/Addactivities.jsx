import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExerciseList from "../../Components/ExerciseList/ExerciseList";
import ExerciseForm from "../../Components/ExerciseForm/ExerciseForm";
import { getActivity, deleteActivity, editActivity} from "../../api/activity";
import "./Addactivities.css";
import RightSection from "../../Components/RightSection/RightSection";

const exerciseList = [
//   {
//     id: "0",
//     activity: "run",
//     distance: 5,
//     durationHours: "2",
//     durationMin: "30",
//     date: "29/07/2022",
//     calories: "1000",
//     heartrate: 80,
//     description: "วิ่งเพื่อลืมคริสทีน",
//   },
//   {
//     id: "1",
//     activity: "walk",
//     distance: 5,
//     durationHours: "5",
//     durationMin: "45",
//     date: "30/07/2022",
//     calories: "2000",
//     heartrate: 70,
//     description: "walk for who?",
//   },
//   {
//     id: "2",
//     activity: "run",
//     distance: 5,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "run for who? again",
//   },
//   {
//     id: "3",
//     activity: "run",
//     distance: 500000,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "runnnnnnnnnnnnnnnnnnn? again",
//   },
//   {
//     id: "4",
//     activity: "run",
//     distance: 500000,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "runnnnnnnnnnnnnnnnnnn? again",
//   },
//   {
//     id: "5",
//     activity: "run",
//     distance: 500000,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "runnnnnnnnnnnnnnnnnnn? again",
//   },
//   {
//     id: "6",
//     activity: "run",
//     distance: 500000,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "runnnnnnnnnnnnnnnnnnn? again",
//   },
//   {
//     id: "7",
//     activity: "run",
//     distance: 500000,
//     durationHours: "3",
//     durationMin: "20",
//     date: "31/07/2022",
//     calories: "1500",
//     heartrate: 85,
//     description: "runnnnnnnnnnnnnnnnnnn? again",
//   },
// 
];

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
        {isShow ? <ExerciseForm isEdit={isEdit} editId={editId} closeEdit={closeEdit} /> : <RightSection />}
      </div>
    </div>
  );
};

export default Addactivities;
