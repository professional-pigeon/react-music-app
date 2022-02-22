import React from 'react';
import PropTypes from "prop-types";

function Presets(props) {

  console.log(props.presets)
  return (
    <p>hi</p>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
}

export default Presets

