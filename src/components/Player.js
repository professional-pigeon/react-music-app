import React from 'react'
import PropTypes from "prop-types"

function Player(props) {

  function handleTempoChange(event) {
    event.preventDefault();
    let newTempo = event.target.tempo.value
    props.setNewTempo(newTempo);
  }
  // play pause hook
  return (
    <div>
      <p>Tempo in BPM: {props.useTempo}</p>
      <form onSubmit={handleTempoChange}>
        <label>Set Tempo:</label>
        <input type="number" name="tempo" />
        <button type="submit">Change Tempo</button>
        <button onClick={() => props.play(props.playInstrument, props.useTempo, props.sounds)}>Start Music</button>
        <button onClick={() => props.stop(props.intervalID)}>Stop music</button>
      </form>
    </div>
  )
}

Player.propTypes ={
  useTempo: PropTypes.number,
  setNewTempo: PropTypes.func,
  sound: PropTypes.array,
  }

export default Player