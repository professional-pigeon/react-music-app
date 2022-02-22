import React from 'react';
import PropTypes from "prop-types";

function Presets(props) {

  console.log(props.presets[1])
  return (
    <Button></Button>
  )
}

Presets.propTypes = {
  presets: PropTypes.object,
}

export default Presets

