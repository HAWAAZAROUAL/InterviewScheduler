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
import Error from "./Error";
// import { props } from "bluebird";
import useApplicationData from "hooks/useApplicationData";

export default function Appointment(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CANCELLING = "CANCELLING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE";


const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

const save = (name, interviewer) => {
  // newly created interview
  const interview = {
    student: name,
    interviewer: interviewer.id
  };

  transition(SAVING);

  props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true));
}

const cancel = apptId => {

  transition(CANCELLING, true);

  props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));

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
onDelete={() => transition(CONFIRM)}
onEdit={() => transition(EDIT)}
  />)}
{mode === CREATE && 
<Form 
interviewers={props.interviewers} 
onCancel={() => back()}
onSave={save}
/>}

{mode === SAVING && <Status message="saving..."/>}
{mode === CANCELLING && <Status message="cancelling..."/>}
{mode === CONFIRM && <Confirm 
message="Confirming a change is undoable, are you sure?"
onConfirm={cancel} 
onCancel={() => back()}
/>}

{mode === EDIT && <Form 
interviewers={props.interviewers}
onCancel={() => back()}
onSave={save}
name={props.interview.student}
interviewer={props.interview.interviewer}
/>}

{mode === ERROR_DELETE && <Error 
onClose={() => back()}
message="Error, failed to delete appointment."
/>}

{mode === ERROR_SAVE && <Error onClose={() => back()}
message="Error, failed to save appointment."
/>}

</article>

  );
}