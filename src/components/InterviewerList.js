import React from "react";
// import classnames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
const classnames = require("classnames");
const {interviewers, interviewer, setInterviewer} = props;
// not sure if this is right....
const InterviewerListItemClass = classnames("interviewers", {
  "interviewers__item--selected": props.selected
});

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list"></ul>
</section>
  )
}