import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import { Howl, Howler } from 'howler'

function Metronome() {

  let highBlockSound = new Howl({
    src: ["./sounds/High-Wood-Block.mp3"]
  });

  let lowBlockSound = new Howl({
    src: ["./sounds/Low-Wood-Block.mp3"],
    volume: 1.0,
  });

  return (
  <React.Fragment>
    <button onClick={() => lowBlockSound.play()}>Click to hear a block</button>
  </React.Fragment>
  )

}

export default Metronome;