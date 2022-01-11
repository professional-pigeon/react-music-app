import React from 'react'
import SoundLibrary from './sound_logic/SoundLibrary'
import Player from './Player'
import InstrumentForm from './InstrumentForm'
import SetPlayInterval from './SetPlayInterval'
import NoteVisual from './NoteVisual'
import Instructions from './Instructions'
import { Button, Container, Col, Row } from 'react-bootstrap'

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
      displayInstructions: false
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

  setBeat = (beat) => {
    let notes = this.state.instrument
    this.setState({ chosenBeat: beat })
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
          />
          </Col>
        <Col>
        {instructions}
        </Col>
        </Row>
      <Container id="buttonRow">
        <Row>
          <Col>
            <Button variant="primary" onClick={() => this.addBeat()}>Add beat</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => this.addBar()}>Add 4 beats</Button>
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
      />
      <NoteVisual 
        playInstrument={playInstrument}
        addInstrument={this.addInstrumentToSpace}
        removeInstrument={this.removeInstrumentFromSpace}
        setNewBeat={this.setBeat}
        />
    </React.Fragment>
    )
  }
}




export default SoundControl;
