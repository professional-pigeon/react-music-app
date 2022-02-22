import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap'

function Presets(props) {

  console.log(props.presets[1])
  return (
    <Button onClick={() => props.setPreset(1)}></Button>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
  setPreset: PropTypes.func,
}

export default Presets

