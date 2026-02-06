import "./App.css";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaFaceGrinWide } from "react-icons/fa6";

import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const clickBtn = () => {
    setIsActive(!isActive);
    console.log("dr");
  };
  return (
    <div className="wrapper">
      <h1 className="title">Вигідна пропозиція саме для тебе!!!</h1>
      <h2 className="title2">
        {!isActive
          ? "Натискай на кнопку та переходь за посиланням!"
          : "Натисни знову і реклама зникне"}
      </h2>
      <FaArrowDown size={44} color="rgb(253, 5, 5)" />
      <FaArrowDown size={44} color="rgb(253, 5, 5)" />
      <FaArrowDown size={44} color="rgb(253, 5, 5)" />
      <button onClick={clickBtn} className="btn">
        {" "}
        {!isActive ? (
          <FaArrowRight size={44} color="rgb(253, 5, 5)" />
        ) : (
          <FaFaceGrinWide color="rgb(172, 248, 50)" />
        )}
        {!isActive ? "Тисни саме зараз" : "натисни щоб прибрати ці пики"}
        {!isActive ? (
          <FaArrowLeft size={44} color="rgb(253, 5, 5)" />
        ) : (
          <FaFaceGrinWide color="rgb(172, 248, 50)" />
        )}
      </button>
      {isActive && <Backdrop />}{" "}
    </div>
  );
}

export default App;
