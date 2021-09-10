import React, {useState} from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  // make the states for interviewer and name
const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);
const [error, setError] = useState("");

// reset function
const reset = () => {
  setName("");
  setInterviewer(null);
};

// cancel function
const cancel = () => {
  reset();
  props.onCancel();
}

// checks for blank student name
const validate = () => {
  if (name === "") {
    setError("You must write a name, no blanks please.");
    return;
  }
  props.onSave(name, interviewer);
}
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left" onSubmit={event => event.preventDefault()}>
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        data-testid="student-name-input"
        value={name}
        placeholder="Enter Student Name"
        onChange={(e) => setName(e.target.value)}
      />
        <section className="appointment__validation">{error}</section>
    </form>
    <section className="appointment__validation">{error}</section>
    <InterviewerList 
    interviewers={props.interviewers} 
    interviewerId={interviewer && interviewer.id} 
    setInterviewer={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick= {() => validate()}>Save</Button>
    </section>
  </section>
</main>
  );
}