import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [stack, setStack] = useState([]);
  const onClick = (e) => {
    e.preventDefault();
    let index = 0;
    const newEd = { src: <Education key={uuidv4()} /> };
    setStack([...stack, newEd]);
  };
  return (
    <div>
      <General />
      <Education key={uuidv4()} />
      {stack.map((comp) => comp.src)}
      <button onClick={onClick}>+</button>
      <Experience />
    </div>
  );
}

export default Form;
