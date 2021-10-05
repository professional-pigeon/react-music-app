import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import SoundLibrary from './sound_logic/SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'
import NoteVisual from './NoteVisual'
import playOscillator from './Oscilator'
import noteCreator from './sound_logic/NoteCreator'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine
let piano = soundObjects.piano

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      intervalID: 0,
      instrument: [ [ {drumMachine: 'tom_low'}], [], [], [ { piano: 'G2'} ]] 
    }
    this.handleChange = this.handleChange.bind(this);
    // this.addInstrumentToSpace = this.addInstrumentToSpace.bind(this);
    // this.removeInstrumentFromSpace = this.removeInstrumentFromSpace(this);
  }

  // setIntervalIDandPlay = (playInstrument, useTempo, drumMachine) => {
  //   let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
  //   this.setState({ intervalID: n })
  // }

  setIntervalIDandPlay = (playInstrument, useTempo, soundObjects) => {
    let n = SetPlayInterval(playInstrument, useTempo, soundObjects)
    this.setState({ intervalID: n })
  }


  clearTheInterval = (id) => {
    clearInterval(id)
    this.setState({ intervalID: 0 })
  }

  setTempo = (number) => {
    let newTempo = number
    this.setState({ tempo: newTempo })
  }

  addInstrumentToSpace = (newInstrument, location) => {
    let instArray = this.state.instrument
    if (instArray[location][0] === "b") {
      instArray[location][0] = newInstrument
    } else {
      instArray[location].push(newInstrument)
    }
    this.setState({
      instrument: instArray
    })
  }

  removeInstrumentFromSpace = (instrumentToRemove, location) => {
    let instArray = this.state.instrument
    let thingToFilter = instArray[location]
    instArray[location] = thingToFilter.filter(sound => sound != instrumentToRemove)
    if (instArray[location].length === 0) {
      instArray[location].push("b")
    }
    this.setState ({
      instrumenet: instArray
    })
  }


  handleChange(event) {
    event.preventDefault();
  }

  resetLoop = () => {
    this.setState({ instrument: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] })
  }

  addBeat = () => {
    let newState = this.state.instrument
    newState.push(["b"], ["b"], ["b"], ["b"])
    this.setState({ instrument: newState})
  }

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    let note = soundObjects.frequency["A-4"]
    return (
    <React.Fragment>
      <Player
        useTempo={useTempo} 
        setNewTempo={this.setTempo}
        sounds={soundObjects}
        play={this.setIntervalIDandPlay}
        stop={this.clearTheInterval}
        intervalID={this.state.intervalID}
        playInstrument={playInstrument}
      />
      <button onClick={() => piano.play('G2')}>tone</button>
      <button onClick={() => this.addBeat()}>Add beats</button>
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        resetLoop={this.resetLoop}
        sounds={drumMachine}
      />
      {/* <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        removeInstrument={this.removeInstrumentFromSpace}
        /> */}
    </React.Fragment>
    )
  }
}




export default SoundControl;
