import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';



function MusicControl() {

return (
      <div>
        <svg width={1000} height={500}>
          <line x1={10} y1={10} x2={500} y2={10} stroke={"black"}></line>
        </svg>
      </div>
  )
}

export default MusicControl