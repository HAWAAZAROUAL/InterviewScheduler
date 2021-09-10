import axios from "axios";
import { useState, useEffect } from "react";

function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days:[],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day});


  // request days data from /api/days
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(response => {
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

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => setState(prev => {
        return {
          ...prev,
          appointments
        }
      }));
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview:null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios.delete(`/api/appointments/${id}`)
    .then(res => {
      setState(prev => {
        return {
          ...prev,
          appointments
        }
      })
    })
  }

}

export default useApplicationData;