import React from "react";
import "./styles.scss";

export default function Header(props) {
  
  return (
    // reference the styles
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>

  );
}
