import { Link, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Test Route</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Overview">Overview</Link>{" "}
        <Link to="/Addactivities">Addactivities</Link>{" "}
        <Link to="/Home">Home</Link> {" "}
        <Link to="/Login">Log In</Link>{" "}
        <Link to="/SignUp"> Register</Link>
      </nav>
    </div>
  );
};

export default App;
