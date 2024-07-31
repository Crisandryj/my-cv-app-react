import { useState } from "react";

function Education() {
  //Track status of whether form has been submitted
  const [submitted, setSubmitted] = useState(false);
  //Save form inputs in object: Name,Email and Phone Number
  const [form, setForm] = useState({
    schoolName: "",
    study: "",
    date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const myForm = document.getElementById("myEdForm");
    const formData = new FormData(myForm);
    const newForm = {
      schoolName: formData.get("user_school"),
      study: formData.get("user_study"),
      date: formData.get("user_date"),
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
        <form action="" id="myEdForm">
          <fieldset>
            <legend>Education</legend>
            <ul>
              <li>
                <label htmlFor="school">School:</label>
                <input
                  type="text"
                  id="school"
                  name="user_school"
                  defaultValue={form.schoolName}
                />
              </li>
              <li>
                <label htmlFor="study">Study:</label>
                <input
                  type="text"
                  id="study"
                  name="user_study"
                  defaultValue={form.study}
                />
              </li>
              <li>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="user_date"
                  defaultValue={form.date}
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
          <legend>Education</legend>
          <ul>
            <li>{form.schoolName}</li>
            <li>{form.study}</li>
            <li>{form.date}</li>
            <li className="button">
              <ClickButton />
            </li>
          </ul>
        </fieldset>
      </>
    );
  }
}

export default Education;
