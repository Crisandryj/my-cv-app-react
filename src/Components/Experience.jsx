import { useState } from "react";

function Experience() {
  //Track status of whether form has been submitted
  const [submitted, setSubmitted] = useState(false);
  //Save form inputs in object: Name,Email and Phone Number
  const [form, setForm] = useState({
    company: "",
    position: "",
    dateStart: "",
    dateEnd: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const myForm = document.getElementById("myExpForm");
    const formData = new FormData(myForm);
    const newForm = {
      company: formData.get("user_company"),
      position: formData.get("user_position"),
      dateStart: formData.get("user_dateStart"),
      dateEnd: formData.get("user_dateEnd"),
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
      //edit btn
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
        <form action="" id="myExpForm">
          <fieldset>
            <legend>Experience</legend>
            <ul>
              <li>
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  id="company"
                  name="user_company"
                  defaultValue={form.company}
                />
              </li>
              <li>
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  name="user_position"
                  defaultValue={form.position}
                />
              </li>
              <li>
                <label htmlFor="dateStart">Start Date:</label>
                <input
                  type="date"
                  id="dateStart"
                  name="user_dateStart"
                  defaultValue={form.dateStart}
                />
              </li>
              <li>
                <label htmlFor="dateEnd">End Date:</label>
                <input
                  type="date"
                  id="dateEnd"
                  name="user_dateEnd"
                  defaultValue={form.dateEnd}
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
          <legend>Experience</legend>
          <ul>
            <li>Company: {form.company}</li>
            <li>Position: {form.position}</li>
            <li>Date Start: {form.dateStart}</li>
            <li>Date End: {form.dateEnd}</li>
            <li className="button">
              <ClickButton />
            </li>
          </ul>
        </fieldset>
      </>
    );
  }
}

export default Experience;
