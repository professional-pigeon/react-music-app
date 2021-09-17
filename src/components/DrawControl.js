import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';
import Vex from 'vexflow'
import Canvas from './Canvas';


function MusicControl() {

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.moveTo(50,0)
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
  }




return (
      <div>
        <Canvas draw={draw} />
        <button>draw a line</button>
      </div>
  )
}

export default MusicControl