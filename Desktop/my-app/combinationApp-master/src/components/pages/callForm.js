import { Fragment } from "react";
import { useState } from "react";

const CallForm = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredSubject, setSubject] = useState("");
  const [enteredText, setText] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(enteredName);
  };
  const subjectHandler = (event) => {
    setSubject(event.target.value);
    console.log(enteredSubject);
  };
  const textHandler = (event) => {
    setText(event.target.value);
    console.log(enteredText);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(enteredEmail)) {
      window.alert("Please enter a valid email");
      return;
    }
    setEmail("");
    setName("");
    setSubject("");
    setText("");
  };

  return (
    <Fragment>
      <h1 className="formsheet">Call Form</h1>
      <form className="formsheet" onSubmit={submitHandler}>
        <p>
          <label className="formLable" htmlFor="Name">
            Name
          </label>
          <input
            className="formInput"
            required
            id="Name"
            onSubmit={nameHandler}
          ></input>
        </p>

        <p>
          <label className="formLable" htmlFor="email">
            Email:
          </label>
          <input className="formInput" required id="email"></input>
        </p>

        <p>
          <label className="formLable" htmlFor="subject">
            Subject
          </label>
          <input
            className="formInput"
            required
            id="subject"
            onSubmit={subjectHandler}
          ></input>
        </p>

        <p>
          <label className="formLable" htmlFor="text">
            Text:
          </label>
          <input
            className="formInput"
            required
            id="text"
            onSubmit={textHandler}
          ></input>
        </p>
        <button className="formButton" type="submit">
          Click for submit
        </button>
      </form>
    </Fragment>
  );
};
export default CallForm;
