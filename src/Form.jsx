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
      <Experience />
    </>
    // if (stack.length > 0) {
    //   console.log("go");
    //   return stack.map((x) => x);
    // }
  );
}

export default Form;
