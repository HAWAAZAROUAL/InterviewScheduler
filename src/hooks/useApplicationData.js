import axios from "axios";
import { useState, useEffect } from "react";
import { updateSpots } from "helpers/selectors";

function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days:[],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day})

  const bookInterview = (Id, interview) => {
    console.log('bookInterview: ', Id, interview);

    const appointment = {
      ...state.appointments[Id],
      interview: {...interview} 
    };

    const appointments = {
      ...state.appointments, 
      [Id]: appointment 
    };

    const days = updateSpots(state, appointments)

    return axios.put(
      `/api/appointments/${Id}`, {interview}
    ).then(() => setState(prev => {
      return {
        ...prev,
        appointments,
        days
      }
    }));
    
  };


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


  const cancelInterview = (Id) => {
    const appointment = {
      ...state.appointments[Id],
      interview:null
    };
    const appointments = {
      ...state.appointments,
      [Id]: appointment
    }

    const days = updateSpots(state, appointments)

    return axios.delete(`/api/appointments/${Id}`)
    .then(res => {
      setState(prev => {
        return {
          ...prev,
          appointments,
          days
        }
      })
    })
  }

}

export default useApplicationData;