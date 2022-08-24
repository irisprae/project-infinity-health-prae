import { useState } from "react";
import axios from "axios";
import PreLogin from "../PreLogin/PreLogin";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <PreLogin />
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h4>Please provide your information</h4>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  className={styles.input}
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className={styles.input}
                />
                <br></br>
                <input
                  type="date"
                  placeholder="Birthdate : mm/dd/yyyy"
                  name="birthdate"
                  onChange={handleChange}
                  value={data.birthdate}
                  required
                  className={styles.input}
                />
                <br></br>
                <select
                  className={styles.input}
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                  required
                >
                  <option value=" "> </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <br></br>
                <input
                  type="height"
                  placeholder="Height : cms."
                  name="height"
                  onChange={handleChange}
                  value={data.height}
                  required
                  className={styles.input}
                />
                <br></br>
                <input
                  type="weight"
                  placeholder="Weight : kgs."
                  name="weight"
                  onChange={handleChange}
                  value={data.weight}
                  required
                  className={styles.input}
                />
                <br></br>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
              </div>

              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;