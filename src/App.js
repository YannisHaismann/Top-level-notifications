import './App.css';
import { push, remove} from "./Utils/TopLevelNotifications"
import { useState } from "react"

function App() {

  const [position, setPosition] = useState('bottom-right')

  const changePosition = (el) => {
    setPosition(el.currentTarget.value)
  } 

  return (
    <div className="App">
      <select onChange={changePosition}>
        <option value="bottom-right">Bottom-right</option>
        <option value="top-right">Top-right</option>
        <option value="top-left">Top-left</option>
        <option value="bottom-left">Bottom-left</option>
      </select>
      <div className="click-parent">
        <div onClick={() => push("warning", position, "Warning notification")} className="click-div top-level-notifications_warning">
        </div>
        <div onClick={() => push("informations", position, "Informations notification")} className="click-div top-level-notifications_informations">
        </div>
        <div onClick={() => push("danger", position, "Danger notification")} className="click-div top-level-notifications_danger">
        </div>
        <div onClick={() => push("primary", position, "Primary notification")} className="click-div top-level-notifications_primary">
        </div>
      </div>
      <div id="notifications-bundle" className="notifications-bundle">
      </div>
    </div>
  );
}

export default App;
