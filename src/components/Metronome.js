import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import { Howl, Howler } from 'howler'
import SoundLibrary from './SoundLibrary'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine

class Metronome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: 100,
      playing: false,
      intervalID: 0
    }
  }

  interval = ""


  // lowBlock = new Howl({
  //   src: noise,
  //   volume: 1.0,
  // });

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

  playMetronome = (sound, tempo, playingState, interval) => {
    playingState = !playingState
    this.setState({
      playing: playingState
    })
    if (playingState) {
      interval = setInterval(function(){sound.play('clap')}, (60000 / tempo))
      this.setState({
        intervalID: interval
      })
    } else {

      clearInterval(interval);
      this.setState({
        intervalID: 0
      })
      console.log(interval)
    }
  }

  render() {
    console.log(soundObjects.drumMachine.sprite)
    let useTempo = this.state.tempo
    let playState = this.state.playing
    return (
    <React.Fragment>
      <p>Tempo in BPM: {useTempo}</p>
      <button onClick={() => this.upTempo()}>add tempo</button>
      <button onClick={() => this.playMetronome(drumMachine, useTempo, playState, this.state.intervalID)}>{this.state.playing ? "stop music" : "play music"}</button>
      <button onClick={() => this.downTempo()}>subtract tempo</button>
    </React.Fragment>
    )
  }
}

export default Metronome;

