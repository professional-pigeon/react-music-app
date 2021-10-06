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
import PianoVisual from './PianoVisual'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine
let piano = soundObjects.piano

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      intervalID: 0,
      instrument: [['tom_low', 'G2', 'C3'],[],[],[],['clap'],['tom_low'],['cowbell'],[],['tom_low'],[],[],['cowbell'],['clap'],['cowbell'],[],[]],
      pianoNotes: [],
      chosenBeat: ""
    }
    this.handleChange = this.handleChange.bind(this);
    // this.addInstrumentToSpace = this.addInstrumentToSpace.bind(this);
    // this.removeInstrumentFromSpace = this.removeInstrumentFromSpace(this);
  }

  setIntervalIDandPlay = (playInstrument, playPiano, useTempo) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
    let x = SetPlayInterval(playInstrument, useTempo, piano)
    this.setState({ intervalID: [n, x] })
  }

  clearTheInterval = (id) => {
    id.forEach(id => clearInterval(id))
    this.setState({ intervalID: 0 })
  }

  setTempo = (number) => {
    let newTempo = number
    this.setState({ tempo: newTempo })
  }

  seePiano = (notes, i) => {
    this.setState({ pianoNotes: notes, chosenBeat: i })
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

  addPianoNote = (newNote, location) => {
    let instArray = this.state.instrument
    if (instArray[location][0] === "b") {
      instArray[location][0] = newNote
    } else {
      instArray[location].push(newNote)
    }
    let currentPianoState = this.state.pianoNotes
    currentPianoState.push(newNote)
    currentPianoState.forEach(note => piano.play(note))
    this.setState({ pianoNotes: currentPianoState,
      instrument: instArray })
  }

  removeInstrumentFromSpace = (instrumentToRemove, location) => {
    let instArray = this.state.instrument
    let thingToFilter = instArray[location]
    instArray[location] = thingToFilter.filter(sound => sound != instrumentToRemove)
    if (instArray[location].length === 0) {
      instArray[location] = []
    }
    this.setState ({
      instrumenet: instArray
    })
  }

  removePianoNote = (noteToRemove, location) => {
    let instArray = this.state.instrument
    let thingToFilter = instArray[location]
    instArray[location] = thingToFilter.filter(sound => sound != noteToRemove)
    if (instArray[location].length === 0) {
      instArray[location] = []
    }
    let newNotes = instArray[location]
    this.setState ({
      instrumenet: instArray,
      pianoNotes: newNotes
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
    console.log(this.state.pianoNotes)
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
        playPiano={this.state.piano}
      />
      <button onClick={() => playOscillator(note)}>tone</button>
      <button onClick={() => this.addBeat()}>Add beats</button>
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        resetLoop={this.resetLoop}
        drums={drumMachine}
        piano={piano}
      />
      <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        removeInstrument={this.removeInstrumentFromSpace}
        seePianoNote={this.seePiano}

        />
      <PianoVisual
        pianoNotes={piano}
        addNote={this.addPianoNote}
        removeNote={this.removePianoNote}
        beat={this.state.chosenBeat}
        displayNotes={this.state.pianoNotes}
      />
    </React.Fragment>
    )
  }
}




export default SoundControl;
