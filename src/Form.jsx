import Education from "./Education";
import General from "./General";
import Experience from "./Experience";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [edStack, setedStack] = useState([]);
  const [expStack, setexpStack] = useState([]);

  const onClickAdd = (e) => {
    e.preventDefault();
    const newEd = { src: <Education key={uuidv4()} /> };
    setedStack([...edStack, newEd]);
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    setedStack([...edStack].splice(1));
  };

  const onClickAddExp = (e) => {
    e.preventDefault();
    const newExp = { src: <Experience key={uuidv4()} /> };
    setexpStack([...expStack, newExp]);
  };

  const onClickDeleteExp = (e) => {
    e.preventDefault();
    setexpStack([...expStack].splice(1));
  };

  return (
    <div>
      <General />
      <Education key={uuidv4()} />
      {edStack.map((comp) => comp.src)}
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickDelete}>-</button>
      <Experience />
      {expStack.map((comp) => comp.src)}
      <button onClick={onClickAddExp}>+</button>
      <button onClick={onClickDeleteExp}>-</button>
    </div>
  );
}

export default Form;
