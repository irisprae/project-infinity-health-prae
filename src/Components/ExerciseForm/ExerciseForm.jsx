import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ExerciseForm.css";

const ExerciseForm = () => {
  // const [activity, setActivity] = useState('Run')
  // const [distance, setDistance] = useState(0)
  // const [durationHours, setDurationHours] = useState(0);
  // const [durationMin, setDurationMin] = useState(0);
  // const [date, setDate] = useState();
  // const [calories, setCalories] = useState(0);
  // const [heartrate, setHearthrate] = useState(0);
  // const [description, setDescription] = useState('');

  // const submitRecords = () => {
  //     const records = {
  //         activity,
  //         distance,
  //         durationHours,
  //         durationMin,
  //         date,
  //         calories,
  //         heartrate,
  //         description,
  //     }
  //     console.log(records);
  // }

  // return (
  //     <div className='exerciseForm'>
  //         <div className='form-box'>
  //             <form >
  //                 <h2>Create your activity</h2>
  //                 <label >Select your activity</label>
  //                 <select value={activity} onChange={e => setActivity(e.target.value)}>
  //                     <option>Run</option>
  //                     <option>Swim</option>
  //                     <option>Dance</option>
  //                 </select>
  //                 <br />
  //                 <label >Distance: </label>
  //                 <input type="number" placeholder="put your steps" onChange={e => setDistance(parseFloat(e.target.value))} disabled={activity == 'Run' ? false : true} />
  //                 <br />
  //                 <label >Dutation: </label>
  //                 <br />
  //                 <input id="hours" type="number" placeholder="Hours" onChange={e => setDurationHours(parseFloat(e.target.value))} />
  //                 <input id="min" type="number" placeholder="Minute" maxLength={59} onChange={e => setDurationMin(parseFloat(e.target.value))} />
  //                 <br />
  //                 <label >Date: </label>
  //                 <br />
  //                 <input type="datetime-local" onChange={e => setDate(e.target.value)} required />
  //                 <br />
  //                 <label >Calories: </label>
  //                 <input type="number" placeholder="put your calories" onChange={e => setCalories(parseFloat(e.target.value))} />
  //                 <br />
  //                 <label >Heart Rate: </label>
  //                 <input type="number" placeholder="put your heartrate" onChange={e => setHearthrate(parseFloat(e.target.value))} />
  //                 <br />
  //                 <label >Description: </label>
  //                 <br />
  //                 <input id="text-box" type="text" placeholder="put your description" onChange={e => setDescription(e.target.value)} />
  //                 <br />
  //             </form>
  //         </div>

  //         <div>
  //             <button onClick={submitRecords}>Submit</button>
  //         </div>

  //     </div>
  // )

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [activity, setActivity] = useState("Run");

  return (
    <div className="exerciseForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create your activities</h2>
        <label>Select your activities</label>
        <select {...register("activity")} onChange={e => setActivity(e.target.value)}>
          <option value="Run">Run</option>
          <option value="Swim">Swim</option>
          <option value="Dance">Dance</option>
        </select>
        <br />
        <label>Distance</label>
        <input
          type="number"
          {...register("distance", {
            required: activity !== "Run" ? false : true,
            valueAsNumber: true,
          })}
          disabled={activity !== "Run" ? true : false}
        />
        {errors.distance && <p>Distance is required</p>}
        <label>Date </label>
        <input
          type="datetime-local"
          {...register("date", { required: true })}
        />
        {errors.duration && <p>Date is required</p>}
        <label>Duration </label>
        <input type="time" {...register("duration", { required: true })} />
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
