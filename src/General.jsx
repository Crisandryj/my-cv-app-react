function General() {
  return (
    <>
      <form action="">
        <fieldset>
          <legend>General</legend>
          <ul>
            <li>
              <label for="name">Name:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label for="mail">Email:</label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label for="number">Number:</label>
              <input type="tel" id="number" name="user_num" />
            </li>
          </ul>
        </fieldset>
      </form>
    </>
  );
}

export default General;
