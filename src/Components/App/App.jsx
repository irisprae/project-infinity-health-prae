import { Route, Routes, Navigate } from "react-router-dom";
import Overview from "../../Pages/Overview/Overview";
import Signup from "../../Pages/SignUp.jsx/SignUp";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/LogOut.jsx/LogOut";
import Addactivities from "../../Pages/AddActivities/Addactivities";

function App() {
	const user = localStorage.getItem("token");
	return (
		<Routes>
			{user && <Route path="/overview" exact element={<Overview />} />}
			{user && <Route path="/addactivities" exact element={<Addactivities />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/logout" exact element={<Main />} />
			<Route path="/" exact element={<Home />} />
			<Route path="/overview" element={<Navigate replace to="/login" />} />
			<Route path="/addactivities" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;