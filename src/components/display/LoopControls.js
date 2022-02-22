import React from 'react';
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

function LoopControls(props) {
  let displayButton = (props.intervalID[0] !== undefined ? <Button id="stop-icon" onClick={() => props.stop(props.intervalID)}>{"Stop"}</Button> : <Button id="play-icon" onClick={() => props.play(props.playInstrument, props.useTempo)}>Play</Button> )
  
  return (
      <div className="loop-controls">
        {displayButton}
        <Button variant="warning" onClick={()=> props.resetLoop()}>Reset Loop</Button>
      </div>
  )
}

LoopControls.propTypes ={
  sounds: PropTypes.object,
  play: PropTypes.func,
  stop: PropTypes.func,
  resetLoop: PropTypes.func,
  intervalID: PropTypes.array,
  playInstrument: PropTypes.array,
  }

export default LoopControls