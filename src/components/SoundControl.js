import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import SoundLibrary from './SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'
import NoteVisual from './NoteVisual'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      intervalID: 0,
      instrument: [['tom_low'],['b'],['b'],['b'],['clap'],['tom_low'],['clave'],['b'],['tom_low'],['b'],['b'],['b'],['clap'],['clave'],['b'],['clave']],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addInstrumentToSpace = this.addInstrumentToSpace.bind(this);
  }

  setIntervalIDandPlay = (playInstrument, useTempo, drumMachine) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
    this.setState({ intervalID: n })
  }

  clearTheInterval = (id) => {
    console.log(id)
    clearInterval(id)
    this.setState({ intervalID: 0 })
  }

  setTempo = (number) => {
    let newTempo = number
    this.setState({ tempo: newTempo })
  }

  addInstrumentToSpace(newInstrument, location) {
    let instArray = this.state.instrument
    if (instArray[location-1][0] === "b") {
      instArray[location-1][0] = newInstrument
    } else {
      instArray[location-1].push(newInstrument)
    }
    this.setState({
      instrument: instArray
    })
  }

  handleChange(event) {
    event.preventDefault();
  }

  resetLoop = () => {
    this.setState({ instrument: [['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b']] })
  }

  addBeat = () => {
    let newState = this.state.instrument
    newState.push(["b"], ["b"], ["b"], ["b"])
    this.setState({ instrument: newState})
  }

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    return (
    <React.Fragment>
      <Player
        useTempo={useTempo} 
        setNewTempo={this.setTempo}
      />
      <button onClick={() => this.setIntervalIDandPlay(playInstrument, useTempo, drumMachine)}>Start Music</button>
      <button onClick={() => this.clearTheInterval(this.state.intervalID)}>Stop music</button>
      <button onClick={() => this.addBeat()}>Add beats</button>
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        resetLoop={this.resetLoop}
        sounds={drumMachine}
      />
      <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        />
    </React.Fragment>
    )
  }
}




export default SoundControl;

// add 8th notes?

// right now adding only quarter notes and a blank 8th note space


