import React from 'react'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import SoundLibrary from './sound_logic/SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'
import NoteVisual from './NoteVisual'
import playOscillator from './Oscilator'
import PianoVisual from './PianoVisual'
import Instructions from './Instructions'
import { Button, Container, Col, Row } from 'react-bootstrap'

let soundObjects = SoundLibrary()
let drumMachine = soundObjects.drumMachine
let piano = soundObjects.piano

class SoundControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tempo: 100,
      intervalID: [],
      instrument: [['tom_low'],[],[],[],['clap'],['tom_low'],['cowbell'],[],['tom_low'],[],[],['cowbell'],['clap'],['cowbell'],[],['clap']],
      pianoNotes: [],
      chosenBeat: 0,
      displayInstructions: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  setIntervalIDandPlay = (playInstrument, playPiano, useTempo) => {
    let n = SetPlayInterval(playInstrument, useTempo, drumMachine)
    let x = SetPlayInterval(playInstrument, useTempo, piano)
    this.setState({ intervalID: [n, x] })
  }

  clearTheInterval = (id) => {
    id.forEach(id => clearInterval(id))
    this.setState({ intervalID: [] })
  }

  setTempo = (number) => {
    let newTempo = number
    this.setState({ tempo: newTempo })
  }

  seePiano = (i) => {
    let notes = this.state.instrument[i]
    this.setState({ pianoNotes: notes, chosenBeat: i })
  }

  setBeat = (beat) => {
    let notes = this.state.instrument
    this.setState({ pianoNotes: notes[beat], chosenBeat: beat })
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

  addPianoNote = (newNote, location) => {
    let instArray = this.state.instrument
    if (instArray[location][0] === undefined) {
      console.log("here")
      instArray[location][0] = newNote
    } else {
      console.log("there")
      instArray[location].push(newNote)
    }
    let currentPianoState = this.state.pianoNotes
    // currentPianoState.push(newNote)
    currentPianoState.forEach(note => piano.play(note))
    this.setState({ pianoNotes: currentPianoState,
      instrument: instArray })
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

  removePianoNote = (noteToRemove, location) => {
    let instArray = this.state.instrument
    let thingToFilter = instArray[location]
    instArray[location] = thingToFilter.filter(sound => sound !== noteToRemove)
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
    this.setState({ instrument: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] })
  }

  addBeat = () => {
    let newState = this.state.instrument
    newState.push([], [], [], [])
    this.setState({ instrument: newState})
  }

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    let note = soundObjects.frequency["A-4"]
    let instructions = ""
    if (this.state.displayInstructions === true) {
      instructions = <Instructions/>
    } else {
      instructions = <Button variant="info" id="instructions" onClick={() => this.seeInstructions()}>Instructions</Button>
    }
    return (
    <React.Fragment>
      <Row>
        <Col>
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
          </Col>
        <Col>
        <Instructions/>
        </Col>
        </Row>
      <Container id="buttonRow">
        <Row>
          {/* <Col>
            <Button variant="danger" onClick={() => playOscillator(note)}>Terrible Tone</Button>
          </Col> */}
          <Col>
            <Button variant="primary" onClick={() => this.addBeat()}>Add beats</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=> this.resetLoop()}>Reset Loop</Button>
          </Col>
        </Row>
      </Container>
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        drums={drumMachine}
        piano={piano}
      />
      <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        removeInstrument={this.removeInstrumentFromSpace}
        seePianoNote={this.seePiano}
        setNewBeat={this.setBeat}

        />
      {/* <PianoVisual
        pianoNotes={piano}
        addNote={this.addPianoNote}
        removeNote={this.removePianoNote}
        beat={this.state.chosenBeat}
        displayNotes={this.state.pianoNotes}
      /> */}
    </React.Fragment>
    )
  }
}




export default SoundControl;
