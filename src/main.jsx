import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import General from "./General.jsx";
import "./index.css";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

const onClick = (e) => {
  e.preventDefault();
  const [stack, setStack] = useState([]);
  const newEd = <Education />;
  setStack([...stack, newEd]);
  <EducationMulitple stack={stack} />;
  console.log(stack);
};

function EducationMulitple(stack) {
  if (stack.length > 0) {
    console.log("go");
    return stack.map((x) => x);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <General />
    <Education onClick={onClick} />
    <EducationMulitple />
    <Experience />
  </React.StrictMode>
);
