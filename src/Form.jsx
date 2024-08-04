import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import React, { useState } from "react";

function Form() {
  const [stack, setStack] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    const newEd = { src: <Education /> };
    setStack([...stack, newEd]);
  };
  return (
    <>
      <General />
      <Education />
      {stack.map((x) => x.src)}
      <button onClick={onClick}>+</button>
      <Experience />
    </>
  );
}

export default Form;
