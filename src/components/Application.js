import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
// import Button from "components/Button.js";
import DayList from "components/DayList.js";
import DayListItem from "components/DayListItem.js";
import InterviewerListItem from "components/InterviewerListItem.js";
import InterviewerList from "components/InterviewerList.js";
import Appointment from "components/Appointment";

import "components/Application.scss";

// mock data for appointments
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];



export default function Application(props) {
const [day, setDay] = useState(["Monday"]);
const [days, setDays] = useState([]);

// request days data from /api/days
useEffect(() => {
  axios.get('/api/days').then(response => {
    console.log('response.data:', response.data);
    setDays([...response.data]);
  })
}, []);

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
        {appointments.map(appointment => {
          return (
            <Appointment
              key={appointment.id}
              {...appointment} />
          )
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
