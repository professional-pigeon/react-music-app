import React from 'react';
import SoundLibrary from './sound_logic/SoundLibrary';
import Player from './display/Player';
import InstrumentForm from './display/InstrumentForm';
import SetPlayInterval from './sound_logic/SetPlayInterval';
import NoteVisual from './display/NoteVisual';
import Presets from './display/Presets';
import Tempo from './display/Tempo'
import { Button } from 'react-bootstrap';

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      intervalID: [],
      instrument: [['tom_low'],[],[],[],['clap'],['tom_low'],['cowbell'],[],['tom_low'],[],[],['cowbell'],['clap'],['cowbell'],[],['clap']],
      chosenBeat: 0,
      displayInstructions: false,
      presets: { 1: [['tom_low'],[],[],[],['clap'],['tom_low'],['cowbell'],[],['tom_low'],[],[],['cowbell'],['clap'],['cowbell'],[],['clap']]},
      currentPreset: 1,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  setIntervalIDandPlay = (playInstrument, useTempo) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
    this.setState({ intervalID: [n] })
  }

  clearTheInterval = (id) => {
    id.forEach(id => clearInterval(id))
    this.setState({ intervalID: [] })
  }

  setTempo = (number) => {
    let newTempo = number
    this.setState({ tempo: newTempo })
  }

  setPreset = (key) => {
    this.setState({instrument: this.state.presets[key], currentPreset: key})
  }

  addPreset = (arr) => {
    let newPresets = this.state.presets
    if (Object.keys(newPresets).length !== 0) {
      newPresets[(parseInt(Object.keys(this.state.presets).pop()) + 1)] = arr
    } else {
      newPresets[1] = arr
    }
    this.setState({presets: newPresets})
  }

  deletePreset = (key) => {
    let newPresets = this.state.presets
    delete newPresets[key]
    this.setState({presets: newPresets})
  }

  updatePreset = (arr, key) => {
    let newPresets = this.state.presets
    delete newPresets[key]
    newPresets[key] = arr
    this.setState({presets: newPresets})
  }

  addInstrumentToSpace = (newInstrument, location) => {
    let instArray = this.state.instrument
    if (instArray[location][0] === undefined) {
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
    instArray[location] = thingToFilter.filter(sound => sound !== instrumentToRemove)
    if (instArray[location].length === 0) {
      instArray[location] = []
    }
    this.setState ({
      instrumenet: instArray
    })
  }

  seeInstructions = () => {
    this.setState({ displayInstructions: true })
  }

  handleChange(event) {
    event.preventDefault();
  }

  resetLoop = () => {
    this.setState({ instrument: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] })
  }

  // addBeat = () => {
  //   let newState = this.state.instrument
  //   newState.push([], [], [], [])
  //   this.setState({ instrument: newState})
  // }

  // addBar = () => {
  //     let newState = this.state.instrument
  //     newState.push([], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
  //     this.setState({ instrument: newState})
  // }

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    return (
    <React.Fragment>
      <div id="buttonRow" className='sub-main tools'>
        <Button variant="warning" onClick={()=> this.resetLoop()}>Reset Loop</Button>
        <InstrumentForm 
          handleChange={this.handleChange}
          playInstrument={playInstrument}
          addInstrument={this.addInstrumentToSpace}
          drums={drumMachine}
        />
        <Presets updatePreset={this.updatePreset} presets={this.state.presets} setPreset={this.setPreset} addPreset={this.addPreset} deletePreset={this.deletePreset} instruments={this.state.instrument} currentPreset={this.state.currentPreset} />
      </div>
      <div className='sub-main player'>
        <Player
          sounds={drumMachine}
          play={this.setIntervalIDandPlay}
          stop={this.clearTheInterval}
          intervalID={this.state.intervalID}
          playInstrument={playInstrument}
        />
        <Tempo useTempo={useTempo} setNewTempo={this.setTempo} />
        </div>
      <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        removeInstrument={this.removeInstrumentFromSpace}
        />
    </React.Fragment>
    )
  }
}




export default SoundControl;
