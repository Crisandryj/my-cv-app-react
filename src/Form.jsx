import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import React, { useState } from "react";

function Form() {
  const [stack, setStack] = useState([]);

  let index = 0;
  const onClick = (e) => {
    e.preventDefault();
    const newEd = { src: <Education key={index} /> };
    setStack([...stack, newEd]);
    index = index + 1;
    console.log(index);
  };
  return (
    <>
      <General />
      <Education />
      {stack.map((comp) => comp.src)}
      <button onClick={onClick}>+</button>
      <Experience />
    </>
  );
}

export default Form;
