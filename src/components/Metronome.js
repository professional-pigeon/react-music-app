import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import { Howl, Howler } from 'howler'
import noise from "../sounds/Low-Wood-Block.mp3"

class Metronome extends React.Component {

  audio = new Howl({
    src: noise,
    volume: 1.0,
  });

  playAudio = (sound) => {
    console.log("play")
    sound.play()
  }


  render() {
    return (
    <React.Fragment>
      <button onClick={() => this.playAudio(this.audio)}>Click to hear a block</button>
    </React.Fragment>
    )
  }
}

export default Metronome;