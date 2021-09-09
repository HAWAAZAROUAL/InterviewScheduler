//Appointment component
import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import {useVisualMode} from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "./Status";
import Confirm from "./Confirm";
// import axios from "axios";

export default function Appointment(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CANCELLING = "CANCELLING";
const  CONFIRM = "CONFIRM";


const {mode, transition, back} = useVisualMode(
  props.interview ? SHOW : EMPTY
);

const save = (name, interviewer) => {
  const interview = {
    student: name,
    interviewer: interviewer.id
  }
  transition(SAVING);
  props.bookInterview(props.id, interview)
  .then(() => transition(SHOW))
}

const cancel = id => {
  transition(CANCELLING);
  props.cancelInterview(props.id)
  .then (() => transition(EMPTY));
}

  return (

<article className="appointment">
{/* conditional rendering with ternary operator */}
<Header time={props.time} />

{mode === EMPTY && 
<Empty 
  onAdd={() => transition(CREATE)} />}
{mode === SHOW && ( 
<Show 
student = {props.interview.student}
interviewer={props.interview.interviewer} 
onDelete={() => transition(CONFIRM)}/>)}
{mode === CREATE && 
<Form 
interviewers={props.interviewers} 
onCancel={() => back()}
onSave={save}
/>}

{mode === SAVING && <Status message="saving..."/>}
{mode === CANCELLING && <Status message="cancelling..."/>}
{mode === CONFIRM && <Confirm message="Confirming a change is undoable, are you sure?"
onConfirm={cancel} />}



</article>

  )
}