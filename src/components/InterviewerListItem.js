import React, {useState} from 'react';
// import {useState} from 'react';
import "./InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props) {

const { name, avatar, selected, setInterviewer} = props;

const interviewerClass = classnames ("interviewers__item", {
"interviewers__item--selected": props.selected
});

const clickHandler = () => {
  props.setInterviewer();
}

return (
  <li className={interviewerClass} 
  onClick={clickHandler}>
<img
  className={"interviewers__item-image"}
  src={props.avatar}
  alt={props.name}
/>

{props.selected && props.name}
</li>
  );
}