import React from 'react';
// import {useState} from 'react';
import "components/InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props) {
  const classnames = require("classnames");
const {id, name, avatar, selected, setInterviewer} = props;

const InterviewerListItemClass = classnames("interviewers", {
  "interviewers__item--selected": props.selected
});

return (

  <li className={InterviewerListItemClass} onClick={props.onClick}>
<img
  className={"interviewers__item-image"}
  src={props.avatar}
  alt={props.name}
/>
Sylvia Palmer
</li>
  );
}