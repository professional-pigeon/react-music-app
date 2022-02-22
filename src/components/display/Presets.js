import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap'

function Presets(props) {

  const keys = Object.keys(props.presets).map(num => 
    <Button key={num} onClick={() => props.setPreset(num)}>{num}</Button>
    )

  return (
    <>
    {keys}
    </>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
  setPreset: PropTypes.func,
}

export default Presets

