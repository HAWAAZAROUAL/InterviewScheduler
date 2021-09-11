function getAppointmentsForDay(state, dayName) {
  
  const dailyAppointments = [];

  state.days.forEach(day => {

    if (day.name === dayName) {

      day.appointments.forEach(appointment => {
        dailyAppointments.push(state.appointments[appointment]);
      });  
    }
  });
  return dailyAppointments; 
};



// returns array of interviewers for that day.

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



function getInterview(state, interview) {

 if (interview) {

  return {
    student: interview.student,
    interviewer: {...state.interviewers[interview.interviewer]}
  }

 }
  return null;
}


// function to count empty spots

const countEmptySpots = (appointments, day) => {
  let emptySpots = 0;

  for (const appointment of day.appointments) {
    
    if (appointments[appointment].interview === null) {
      emptySpots ++;
    }
  }

  return emptySpots;
};


// function to update spots

const updateSpots = function(state, appointments) {

  const days = [...state.days];

  const day = {...days.find(day => day.name === state.day)};

  day.spots = countEmptySpots(appointments, day);

  days.splice(day.id - 1, 1, day);

  return days;
};


export {getAppointmentsForDay, getInterview, getInterviewersForDay, countEmptySpots, updateSpots};

