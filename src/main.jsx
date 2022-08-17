import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App/App";
import Overview from "./Pages/Overview/Overview";
import Addactivities from "./Pages/AddActivities/Addactivities";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp.jsx/SignUp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="overview" element={<Overview />} />
      <Route path="addactivities" element={<Addactivities />} />
      <Route path="Home" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
