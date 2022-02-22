import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap'

function Presets(props) {

  const keys = Object.keys(props.presets).map(num => 
    <Button key={num} onClick={() => props.setPreset(num)}>{num}</Button>
    )

  return (
    <div className="presets">
    <h4>Presets</h4>
    {keys}
    <Button onClick={() => props.addPreset(props.instruments)}>add</Button>
    </div>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
  setPreset: PropTypes.func,
  addPreset: PropTypes.func,
  instruments: PropTypes.array,
}

export default Presets

