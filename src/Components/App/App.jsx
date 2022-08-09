
import {Link,Route} from 'react-router-dom'



import './App.css'


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
      <Link to="/Overview">Overview</Link> {" "}
      <Link to="/Addactivities">Addactivities</Link>
    </nav>
  </div>
  )
}

export default App
