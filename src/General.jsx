import { useState } from "react";

function General() {
  //Track status of whether form has been submitted
  const [submitted, setSubmitted] = useState(false);
  //Save form inputs in object: Name,Email and Phone Number
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const myForm = document.getElementById("myForm");
    const formData = new FormData(myForm);
    const newForm = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      email: formData.get("user_num"),
    };
    setForm(newForm);
    setSubmitted(true);
  };

  //copied submit for the moment
  const onEdit = (e) => {
    e.preventDefault();
    const myForm = document.getElementById("myForm");
    const formData = new FormData(myForm);
    const newForm = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      email: formData.get("user_num"),
    };
    setForm(newForm);
    setSubmitted(true);
  };

  function EditButton() {
    return (
      <button type="submit" onClick={onEdit}>
        Edit
      </button>
    );
  }
  function SubmitButton() {
    return (
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    );
  }
  //Add a conditional statement - if submitted show edit button
  function ClickButton() {
    if (submitted == true) {
      return <EditButton />;
    } else {
      return <SubmitButton />;
    }
  }

  return (
    <>
      <form action="" id="myForm">
        <fieldset>
          <legend>General</legend>
          <ul>
            <li>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                defaultValue={form.name}
              />
            </li>
            <li>
              <label htmlFor="mail">Email:</label>
              <input
                type="email"
                id="mail"
                name="user_email"
                defaultValue={form.email}
              />
            </li>
            <li>
              <label htmlFor="number">Number:</label>
              <input
                type="tel"
                id="number"
                name="user_num"
                defaultValue={form.number}
              />
            </li>
            <li className="button">
              <ClickButton />
            </li>
          </ul>
        </fieldset>
      </form>
    </>
  );
}

export default General;
