import React from 'react';
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Tempo(props) {

  function handleTempoChange(event) {
    event.preventDefault();
    let newTempo = event.target.tempo.value
    props.setNewTempo(newTempo);
  }

  return (
    <div className="tempo-form">
      <h3>Tempo Controls</h3>
      <p>Current Tempo: {props.useTempo} BPM</p>
      <form onSubmit={handleTempoChange}>
        <label>Set Tempo:</label>
        <input type="number" name="tempo" defaultValue={parseInt(props.useTempo)} />
        <Button type="submit">Change Tempo</Button>
      </form>
    </div>
  )
}

Tempo.propTypes ={
  useTempo: PropTypes.number,
  setNewTempo: PropTypes.func,
  }

export default Tempo