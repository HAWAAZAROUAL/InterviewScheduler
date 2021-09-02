import React from "react";
import { useState } from "react";
// import Button from "components/Button.js";
import DayList from "components/DayList.js";
// import DayListItem from "components/DayListItem.js";

import "components/Application.scss";

// stories for DayList
const days = [
 {
   id: 1,
   name: "Monday",
   spots: 2,
 },
 {
   id: 2,
   name: "Tuesday",
   spots: 5,
 },
 {
   id: 3,
   name: "Wednesday",
   spots: 0,
 },
];


export default function Application(props) {
const [day, setDay] = useState("Monday");
  return (
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={days}
  day={day}
  setDay={setDay}
/>
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
