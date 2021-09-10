// will return array of appointments for the day
function getAppointmentsForDay(state, dayName) {
const dailyAppointments = [];

// if days array is not empty

  // loop through the days array in the state object
  state.days.forEach(day=> {

    if (day.name === dayName) {

     // this will find the object with that name, and push it into the dailyappt array
      day.appointments.forEach(appointment => {
        dailyAppointments.push(state.appointments[appointment]);
      });

    }
  });

    return dailyAppointments; 
};

function getInterview(state, interview) {
  if(interview) {

    return {
      student: interview.student,
      interviewer: {...state.interviewers[interview.interviewer]}
    }
  }
  return null;
}

function getInterviewersForDay(state, dayName) {

  const interviewers = [];
  state.days.forEach(day => {

    if (day.name === dayName) {

      day.interviewers.forEach(interviewer => {

          interviewers.push(state.interviewers[interviewer]);
      });
    }
  });
    return interviewers; 
};

export {getAppointmentsForDay, getInterview, getInterviewersForDay};