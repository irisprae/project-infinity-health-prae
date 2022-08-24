import React, { useState } from "react";
import { createActivity, editActivity } from "../../api/activity";
import { useForm } from "react-hook-form";
import "./ExerciseForm.css";
import { useEffect } from "react";

const ExerciseForm = ({ isEdit = false, editId, editingActivity, closeEdit }) => {

  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    if(isEdit){
      await editActivity(editId, data)
      closeEdit()
    }else{
      await createActivity(data);
    }
  };
  const [activity, setActivity] = useState("Run");
  
  useEffect(() => {
    if(isEdit) {
      //Fetch data by _id(editId) from backend and set it here;
      console.log(editingActivity)
    }

  },[editId])

  return (
    <div className="exerciseForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{isEdit ? "Edit" : "Create"} your activities</h2>
        <label>Title</label>
        <input type="text" {...register("title", { required: true })} />
        <label>Select your activities</label>
        <select
          {...register("activity")}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="Boxing">Boxing</option>
          <option value="Cycling">Cycling</option>
          <option value="Dancing">Dancing</option>
          <option value="Hiking">Hiking</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Walking">Walking</option>
          <option value="Yoga">Yoga</option>
        </select>
        <br />
        <label>Distance</label>
        <input
          type="number"
          {...register("distance", {
            required: activity !== "Running" ? false : true,
            valueAsNumber: true,
          })}
          disabled={activity !== "Running" ? true : false}
        />
        {errors.distance && <p>Distance is required</p>}
        <label>Date </label>
        <input
          type="datetime-local"
          {...register("date", { required: true })}
        />
        {errors.duration && <p>Date is required</p>}
        <label>Duration </label>
        <input type="number" {...register("duration", { required: true })} />
        {errors.duration && <p>Duration is required</p>}
        <label>Calories</label>
        <input
          type="number"
          placeholder="Calories"
          {...register("calories", { required: true, valueAsNumber: true })}
        />
        {errors.calories && <p>Calories is required</p>}
        <label>Heart Rate</label>
        <input
          type="number"
          placeholder="Heart Rate"
          {...register("heartrate", { required: true, valueAsNumber: true })}
        />
        {errors.heartrate && <p>Heart Rate is required</p>}
        <label>Description</label>
        <input
          className="Description"
          type="text"
          {...register("description", { required: true })}
        />
        {errors.description && <p>Description is required</p>}
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default ExerciseForm;
