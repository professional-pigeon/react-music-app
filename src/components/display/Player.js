import React from 'react';
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Player(props) {

  function handleTempoChange(event) {
    event.preventDefault();
    let newTempo = event.target.tempo.value
    props.setNewTempo(newTempo);
  }

  let displayButton = (props.intervalID[0] !== undefined ? <Button id="stop-icon" onClick={() => props.stop(props.intervalID)}>{"Stop"}</Button> : <Button id="play-icon" onClick={() => props.play(props.playInstrument, props.useTempo)}>Play</Button> )
  
  return (
    <div className='sub-main player'>
      <p>Tempo in BPM: {props.useTempo}</p>
      <form onSubmit={handleTempoChange}>
        <label>Set Tempo:</label>
        <input type="number" name="tempo" />
        <Button type="submit">Change Tempo</Button>
      </form>
      {displayButton}
    </div>
  )
}

Player.propTypes ={
  useTempo: PropTypes.number,
  setNewTempo: PropTypes.func,
  sounds: PropTypes.object,
  play: PropTypes.func,
  stop: PropTypes.func,
  intervalID: PropTypes.array,
  playInstrument: PropTypes.array,
  }

export default Player