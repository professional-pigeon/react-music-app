import React from 'react';
import SoundLibrary from './sound_logic/SoundLibrary';
import Player from './display/Player';
import InstrumentForm from './display/InstrumentForm';
import SetPlayInterval from './sound_logic/SetPlayInterval';
import NoteVisual from './display/NoteVisual';
import Presets from './display/Presets';
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
      presets: { 1: [['tom_low'],[],[],[],['clap'],['tom_low'],['cowbell'],[],['tom_low'],[],[],['cowbell'],['clap'],['cowbell'],[],['clap']]}
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
    this.setState({instrument: this.state.presets[key]})
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

  addBeat = () => {
    let newState = this.state.instrument
    newState.push([], [], [], [])
    this.setState({ instrument: newState})
  }

  addBar = () => {
      let newState = this.state.instrument
      newState.push([], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
      this.setState({ instrument: newState})
  }

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
            <Presets presets={this.state.presets} setPreset={this.setPreset} />
      </div>
        <Player
          useTempo={useTempo} 
          setNewTempo={this.setTempo}
          sounds={drumMachine}
          play={this.setIntervalIDandPlay}
          stop={this.clearTheInterval}
          intervalID={this.state.intervalID}
          playInstrument={playInstrument}
        />
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
