import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import { Howl, Howler } from 'howler'
import noise from "../sounds/Low-Wood-Block.mp3"

class Metronome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: 100
    }
  }

  lowBlock = new Howl({
    src: noise,
    volume: 1.0,
  });

  upTempo = () => {
    let newTempo = this.state.tempo
    newTempo++
    this.setState({
      tempo: newTempo
    })
  }

  downTempo = () => {
    let newTempo = this.state.tempo
    newTempo--
    this.setState({
      tempo: newTempo
    })
  }

  render() {
    let displayTempo = this.state.tempo
    return (
    <React.Fragment>
      <p>{displayTempo}</p>
      <button onClick={() => this.upTempo()}>add tempo</button>
      <button onClick={() => this.lowBlock.play()}>Click to hear a block</button>
      <button onClick={() => this.downTempo()}>subtract tempo</button>
    </React.Fragment>
    )
  }
}

export default Metronome;