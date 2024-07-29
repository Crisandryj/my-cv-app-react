import { useState } from "react";

function General() {
  const [status, setStatus] = useState("typing");
  const [form, setForm] = useState({
    name: "John Doe",
    email: "JD@gmail.com",
    number: "718-939-5555",
  });

  return (
    <>
      <form action="">
        <fieldset>
          <legend>General</legend>
          <ul>
            <li>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label htmlFor="mail">Email:</label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label htmlFor="number">Number:</label>
              <input type="tel" id="number" name="user_num" />
            </li>
            <li className="button">
              <button type="submit">Submit</button>
            </li>
          </ul>
        </fieldset>
      </form>
    </>
  );
}

export default General;

//Add a conditional statement - if submitted show edit button
//STATE
//Track status of wheter form has been submitted
//Save form inputs in object: Name,Email and Phone Number
