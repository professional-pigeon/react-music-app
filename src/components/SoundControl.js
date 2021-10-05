import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import SoundLibrary from './sound_logic/SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'
import NoteVisual from './NoteVisual'
import noteCreator from './sound_logic/NoteCreator'

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
    // this.addInstrumentToSpace = this.addInstrumentToSpace.bind(this);
    // this.removeInstrumentFromSpace = this.removeInstrumentFromSpace(this);
  }

  setIntervalIDandPlay = (playInstrument, useTempo, drumMachine) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
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
    this.setState({ instrument: [['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b'],['b']] })
  }

  addBeat = () => {
    let newState = this.state.instrument
    newState.push(["b"], ["b"], ["b"], ["b"])
    this.setState({ instrument: newState})
  }

  playTone(freq) {
    let audioContext = new window.AudioContext();
    let osc = audioContext.createOscillator();
    let mainGainNode = audioContext.createGain();
    mainGainNode.connect(audioContext.destination);
    mainGainNode.gain.value = 0.5

    // if (type == "custom") {
    //   osc.setPeriodicWave(customWaveform);
    // } else {
    //   osc.type = type;
    // }
    osc.type = 'triangle';
    osc.frequency.value = freq;

    osc.connect(mainGainNode)
    console.log(osc)
    osc.start();
    osc.stop(1)
    console.log("here")
    return osc;
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
        sounds={drumMachine}
        play={this.setIntervalIDandPlay}
        stop={this.clearTheInterval}
        intervalID={this.state.intervalID}
        playInstrument={playInstrument}
      />
      <button onClick={() => this.playTone(note)}>tone</button>
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
        removeInstrument={this.removeInstrumentFromSpace}
        />
    </React.Fragment>
    )
  }
}




export default SoundControl;
