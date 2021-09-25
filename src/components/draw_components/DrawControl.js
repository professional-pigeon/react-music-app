import React from 'react'
// import PropTypes from "prop-types"
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { render } from '@testing-library/react';


// eventual music ledger will be written in svg
function MusicControl() {

return (
      <div>
        <svg width={1000} height={500}>
          <line x1={10} y1={10} x2={500} y2={10} stroke={"black"}></line>
          <line x1={10} y1={20} x2={500} y2={20} stroke={"black"}></line>
          <line x1={10} y1={30} x2={500} y2={30} stroke={"black"}></line>
          <line x1={10} y1={40} x2={500} y2={40} stroke={"black"}></line>
          <line x1={10} y1={50} x2={500} y2={50} stroke={"black"}></line>
        </svg>
      </div>
  )
}

export default MusicControl