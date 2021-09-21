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
      intervalID: 0,
      instrument: "clap"
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeInstrument = this.changeInstrument.bind(this);
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
      interval = setInterval(function(){drumMachine.play(sound)}, (60000 / tempo))
      this.setState({
        intervalID: interval
      })
    } else {
      clearInterval(interval);
      this.setState({
        intervalID: 0
      })
    }
  }

  changeInstrument(event) {
    console.log(event.target.value)
    this.setState({
      instrument: event.target.value
    })
  }

  handleChange(event) {
    event.preventDefault();
    console.log("this happens")
  }

  render() {
    console.log(soundObjects.drumMachine.sprite)
    let useTempo = this.state.tempo
    let playState = this.state.playing
    let playInstrument = this.state.instrument
    console.log(playInstrument)
    return (
    <React.Fragment>
      <p>Tempo in BPM: {useTempo}</p>
      <button onClick={() => this.upTempo()}>add tempo</button>
      <button onClick={() => this.playMetronome(playInstrument, useTempo, playState, this.state.intervalID)}>{this.state.playing ? "stop music" : "play music"}</button>
      <button onClick={() => this.downTempo()}>subtract tempo</button>
      <form onSubmit={this.handleChange}>
        <label>Pick a sound:
          <select value={playInstrument} onChange={this.changeInstrument}>
            <option selected value="clap">Clap</option>
            <option value="cowbell">Cowbell</option>
            <option value="cymbal">Cymbal</option>
            <option value="hihat_open">Open Hi-hat</option>
            <option value="hihat_closed">Closed Hi-hat</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
    )
  }
}

export default Metronome;

// cowbell: [0, 300],
// conga_hi: [400, 300],
// cymbal: [807, 3640],
// conga_mid: [4455, 202],
// conga_low: [4863, 343],
// hihat_open: [5268, 706],
// tom_hi: [6277, 206],
// maracas: [6684, 53],
// tom_mid: [7092, 263],
// hihat_closed: [7496, 90],
// tom_low: [7903, 370],
// clave: [8307, 44],
// clap: [8712, 208],
// snare: [9116, 137],
// rim: [9521, 36],
// kick: [9929, 390]