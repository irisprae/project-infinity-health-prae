import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthdate:"",
    gender: "",
    height: "",
    weight: "",
    username: "",
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
                type="text"
                placeholder="Birthdate : mm/dd/yyyy"
                name="birthdate"
                onChange={handleChange}
                value={data.birthdate}
                required
                className={styles.input}
              />
              <br></br>
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                onChange={handleChange}
                value={data.gender}
                required
                className={styles.input}
              />
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
              </div>

              <div className="UserPass">
              <input
                type="username"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
                className={styles.input}
              />
              <p>Username can only contain alphabets and numbers.</p>
              <p>Username must not exceed 12 characters.</p>
              <input
                type="password"
                placeholder="Password"
                name="passworde"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <p>Password requires at least 8 characters.</p>
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
