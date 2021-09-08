import React, { useState, useEffect } from "react";
import axios from "axios";

import DayList from "components/DayList.js";

import Appointment from "components/Appointment";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";


import "components/Application.scss";




export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days:[],
    appointments: {},
    interviewers: {}
  });
  
  
  // request days data from /api/days
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((response) => {
      setState(prev => {
        return {
          ...prev,
          days: response[0].data,
          appointments: response[1].data,
          interviewers: response[2].data
        };
      });
    }).catch(response => console.log('Error: ', response.message));
  }, []);
  
const dailyAppointments = getAppointmentsForDay(state, state.day);

  // needs to be above application component
  const setDay = day => setState({ ...state, day});

  // setDays function in application component- should update days state
  // const setDays = days => setState(prev => ({...prev, days}));

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, interview)
      .then(res => {
        setState({...state, appointments})
        return res;
      })
      .catch((error) => {
        console.log(error.response)
        return null;
      })
  };
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  }

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
        {dailyAppointments.map(appointment => {
          const interview = getInterview(state, appointment.interview);

          return (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              interview={interview}
              interviewers={state, state.interviewers}
              bookInterview={bookInterview}
              />
          );
          
        })}

        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
