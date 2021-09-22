import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import { Howl, Howler } from 'howler'
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
      instrument: ["clap", "clave", "clap", "tom_low"],
      beats: 4
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeInstrument = this.changeInstrument.bind(this);
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

  playMusic = (sound, tempo, playingState, interval) => {
    let newState = this.setPlayState(playingState)
    if (newState) {
      interval = setInterval(function(){ 
        sound.forEach(noise => drumMachine.play(noise))
      }, (60000 / tempo))
      this.setState({ intervalID: interval })
    } else {
      clearInterval(interval);
      this.setState({ intervalID: 0 })
    }
  }

  changeInstrument(newInstrument) {
    this.setState({
      instrument: newInstrument
    })
  }

  handleChange(event) {
    event.preventDefault();
  }

  render() {
    console.log(soundObjects.drumMachine.sprite)
    let useTempo = this.state.tempo
    // let playState = this.state.playing
    let playInstrument = this.state.instrument
    console.log(playInstrument)
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
        changeInstrument={this.changeInstrument}
      />
      <button onClick={() => SetPlayInterval(playInstrument, useTempo, drumMachine)}>Text</button>
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


