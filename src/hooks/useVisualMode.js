import {React, useState} from "react";

function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

const transition = (newMode, replace = false) => {
  setMode(newMode);

  if(!replace) {
    setHistory(prev => [...prev, newMode]);
  } else {
    setHistory(prev => [...prev.slice(0, -1), newMode]);
  }

}

const back = () => {
  if (history.length > 1) {

    // use slice to get ride of last item without mutating original array
    const secondLastItem = history[history.length - 2];
    setHistory(history.slice(0, -1));

    // can console.log secondLastItem
  }
}
return {mode, transition, back};

}

export {useVisualMode};