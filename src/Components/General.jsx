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
    const myForm = document.getElementById("myGenForm");
    const formData = new FormData(myForm);
    const newForm = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      number: formData.get("user_num"),
    };
    setForm(newForm);
    setSubmitted(true);
  };

  //copied submit for the moment
  const onEdit = (e) => {
    e.preventDefault();

    setSubmitted(false);
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
  //on submit change to listed info without edit option
  if (!submitted) {
    return (
      <>
        <form action="" id="myGenForm">
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
  } else {
    return (
      <>
        <fieldset>
          <legend>General</legend>
          <ul>
            <li>{form.name}</li>
            <li>{form.email}</li>
            <li>{form.number}</li>
            <li className="button">
              <ClickButton />
            </li>
          </ul>
        </fieldset>
      </>
    );
  }
}

export default General;
