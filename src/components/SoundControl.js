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
      playing: false,
      intervalID: 0,
      instrument: [],
      beats: 4
    }

    this.handleChange = this.handleChange.bind(this);
    this.addInstrument = this.addInstrument.bind(this);
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

  setPlayState = (playingState) => {
    playingState = !playingState
    this.setState({ playing: playingState })
    return playingState
  }

  addInstrument(newInstrument) {
    let instArray = this.state.instrument
    console.log(instArray)
    instArray.push(newInstrument)
    instArray.push('')
    this.setState({
      instrument: instArray
    })
  }

  handleChange(event) {
    event.preventDefault();
  }

  resetLoop = () => {
    this.setState({ instrument: [] })
  }

  render() {
    let useTempo = this.state.tempo
    let playInstrument = this.state.instrument
    return (
    <React.Fragment>
      <Player
        useTempo={useTempo} 
        playMusic={this.playMusic}
        setNewTempo={this.setTempo}
        sound={this.state.instrument} 
        interval={this.state.intervalID}
        playState={this.state.playing}
      />
      <InstrumentForm 
        handleChange={this.handleChange}
        playInstrument2={playInstrument}
        changeInstrument={this.addInstrument}
        resetLoop={this.resetLoop}
      />
      <button onClick={() => this.setIntervalIDandPlay(playInstrument, useTempo, drumMachine)}>Start Music</button>
      <button onClick={() => this.clearTheInterval(this.state.intervalID)}>Stop music</button>
    </React.Fragment>
    )
  }
}




export default SoundControl;

//  const module = {
//   n: 0,
//   upN: function () {
//   this.n = this.n +1
//   return this.n
//   }
// }

// const unboundN = module.upN
// const getN = unboundN.bind(module)

// playThing(arr) {
//   n = getN()
//   drumMachine.play(arr[n])
// }
// function createInterval(playThing, arrayOfThings, getN, interval)
// { setInterval(function() { playThing(getN, arrayOfThings); }, interval); }


