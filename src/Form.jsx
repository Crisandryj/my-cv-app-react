import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [stack, setStack] = useState([]);
  const onClickAdd = (e) => {
    e.preventDefault();
    let index = 0;
    const newEd = { src: <Education key={uuidv4()} /> };
    setStack([...stack, newEd]);
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    setStack([...stack].splice(1));
    console.log(stack);
  };

  return (
    <div>
      <General />
      <Education key={uuidv4()} />
      {stack.map((comp) => comp.src)}
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickDelete}>-</button>
      <Experience />
    </div>
  );
}

export default Form;
