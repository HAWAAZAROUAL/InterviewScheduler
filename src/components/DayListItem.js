import React from "react";
import "./DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {

    const dayClass = classnames("day-list__item",{
      "day-list__item--selected" : props.selected,
      "button--danger" : props.spots === 0
    });
  // const {name, spots, selected, setDay} = props;

  // function to render text based on remaining spots
  const formatSpots = () => {
if (props.spots === 0) {
  return "No spots remaining.";
} else if (props.spots === 1) {
  return "1 spot remaining.";
} else {
  return `${props.spots} spots remaining.`;
}
  };

  return (
    <li className={dayClass} onClick= {() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
