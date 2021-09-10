import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

export default function InterviewerList(props) {

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  }

// check if interviewers are truthy.
  const interviewerListItems = props.interviewers && props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewerId}
        setInterviewer={() => props.setInterviewer(interviewer)}
      />
    )
  });

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">interviewer</h4>
  <ul className="interviewers__list">{interviewerListItems}</ul>
</section>
  );
}