import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap'

function Presets(props) {

  const keys = Object.keys(props.presets).map(num => 
    <Button key={num} onClick={() => props.setPreset(num)}>{num}</Button>
    )

  return (
    <div className="presets">
      <h3>Presets</h3>
      <div id="preset-buttons">
          {keys}
      </div>
      <div id="preset-add-delete">
        <Button onClick={() => props.addPreset(props.instruments)}>Add New</Button>
        <Button onClick={() => props.deletePreset(props.currentPreset)}>Delete {props.currentPreset}</Button>
        <Button onClick={() => props.updatePreset(props.instruments, props.currentPreset)}>update {props.currentPreset}</Button>
      </div>
    </div>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
  setPreset: PropTypes.func,
  addPreset: PropTypes.func,
  deletePreset: PropTypes.func,
  currentPreset: PropTypes.number,
  updatePreset: PropTypes.func,
  instruments: PropTypes.array,
}

export default Presets

