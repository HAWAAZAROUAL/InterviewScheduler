import React from "react";
import PropTypes from 'prop-types';
// import classnames from "classnames";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
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

    InterviewerList.propTypes = {
      interviewers: PropTypes.array.isRequired
    };
  });

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">interviewer</h4>
  <ul className="interviewers__list">{interviewerListItems}</ul>
</section>
  )
}

// export default InterviewerList;