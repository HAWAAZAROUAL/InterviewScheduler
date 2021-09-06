import React, { useState, useEffect } from "react";
import axios from "axios";
// import Button from "components/Button.js";
import DayList from "components/DayList.js";
// import DayListItem from "components/DayListItem.js";
// import InterviewerListItem from "components/InterviewerListItem.js";
// import InterviewerList from "components/InterviewerList.js";
import Appointment from "components/Appointment";
// import getAppointmentsForDay from "../helpers/selectors";

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
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Bob Thomas",
      interviewer: {
        id: 2,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png" 
      }
    } 
  },
  {
    id: 4,
    time: "4pm",
  },
    
  {
    id: 5,
    time: "4:30pm",
    interview: {
      student: "Gary Jipp",
      interviewer: {
        id: 5,
        name: "Sven Jones",
        avatar: "https://i.imgur.com/twYrpay.jpg" 
      }
    } 
  }
  
];



export default function Application(props) {
  // const [day, setDay] = useState(["Monday"]);
  // const [days, setDays] = useState([]);
  // const [appointments, setAppointments] = useState({});
  
  // needs to be above application component
  const setDay = day => setState({ ...state, day});

  // setDays function in application component- should update days state
  const setDays = (days) => {

  }

const [state, setState] = useState({
  day: "Monday",
  days:[],

  // this seems optional
  appointments: {}
})

// request days data from /api/days
useEffect(() => {
  axios.get('/api/days').then(response =>
    setDays(response.data));
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
  days={state.days}
  day={state.day}
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
