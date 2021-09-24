import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import SoundLibrary from './SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      // playing: false,
      intervalID: 0,
      instrument: [['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b']],
      beats: 4
    }

    this.handleChange = this.handleChange.bind(this);
    this.addInstrumentToSpace = this.addInstrumentToSpace.bind(this);
  }

  setIntervalIDandPlay = (playInstrument, useTempo, drumMachine) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
    console.log(n)
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

  // setPlayState = (playingState) => {
  //   playingState = !playingState
  //   this.setState({ playing: playingState })
  //   return playingState
  // }

  addInstrumentToSpace(newInstrument, location) {
    let instArray = this.state.instrument
    console.log(instArray)
    if (instArray[location-1][0] === "b") {
      console.log("here")
      instArray[location-1][0] = newInstrument
      console.log(instArray)
    } else {
      console.log("where I want to be though")
      instArray[location-1].push(newInstrument)
      console.log(instArray)
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

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    return (
    <React.Fragment>
      <Player
        useTempo={useTempo} 
        setNewTempo={this.setTempo}
        sound={this.state.instrument} 
        playState={this.state.playing}
      />
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        resetLoop={this.resetLoop}
      />
      <button onClick={() => this.setIntervalIDandPlay(playInstrument, useTempo, drumMachine)}>Start Music</button>
      <button onClick={() => this.clearTheInterval(this.state.intervalID)}>Stop music</button>
    </React.Fragment>
    )
  }
}




export default SoundControl;

// add 8th notes?

// right now adding only quarter notes and a blank 8th note space


