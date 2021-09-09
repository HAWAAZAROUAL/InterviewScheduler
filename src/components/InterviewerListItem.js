import React from 'react';
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


// const updateSpots = function (state, appointments) {

//   //get the days
//   //calculate the spots
//   // update the day
//   // put day in days array
//   //  return days array
//   return []
// }