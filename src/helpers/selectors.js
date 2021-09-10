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

// Function to count empty spots

const countEmptySpots = (appointments, day) => {
  let emptySpots = 0;
for (const appointment of day.appointments) {
  if (appointments[appointment].interview === null) {
    emptySpots ++;
  }
}
return emptySpots;
}

// Function to update Spots

const updateSpots = function(state, appointments) {
  const days = [...state.days];
  const day = {...days.find(day => day.name === state.day)};
  day.spots = countEmptySpots(appointments, days);
  days.splice(day.id -1, 1, day);

  return days;
}

export {getAppointmentsForDay, getInterview, getInterviewersForDay, countEmptySpots, updateSpots};