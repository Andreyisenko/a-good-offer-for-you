import "./App.css";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaFaceGrinWide } from "react-icons/fa6";

import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const clickBtn = () => {
    const url =
      "https://closefracture.com/wuauihxs?key=44c147759cef6dc77faafd4dcb04a6cc";
    window.open(url, "_blank", "noopener,noreferrer");
    setIsActive(true);
  };
  return (
    <div className="wrapper">
      <h1 className="title">Вигідна пропозиція саме для тебе!!!</h1>
      <h2 className="title2">
        {!isActive
          ? "Натискай на кнопку та переходь за посиланням!"
          : "Good..."}
      </h2>
      <button onClick={clickBtn} className="btn">
        {" "}
        "Тисни саме зараз"
      </button>
      {isActive && <Backdrop />}{" "}
    </div>
  );
}

export default App;
