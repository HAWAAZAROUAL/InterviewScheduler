import React from 'react';
// import {useState} from 'react';
import "components/InterviewerListItem.scss";
// import classnames from "classnames";

export default function InterviewerListItem(props) {
  const classnames = require("classnames");
const { name, avatar, selected, setInterviewer} = props;

const InterviewerListItemClass = classnames("interviewers__item", {
  "interviewers__item--selected": selected
});

return (

  <li className={InterviewerListItemClass} onClick={setInterviewer}>
<img
  className={"interviewers__item-image"}
  src={avatar}
  alt={name}
/>
{props.name}

{selected && name}
</li>
  );
}