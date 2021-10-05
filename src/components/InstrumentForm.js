import React from 'react'
import PropTypes from "prop-types"
import { getDefaultNormalizer } from '@testing-library/dom';

function InstrumentForm(props) {

  function handleInstrumentAdd(event) {
    event.preventDefault();
    let newInstrument = event.target.instrument.value
    let beat = event.target.beat.value
    props.addInstrument(newInstrument, (beat -1));
  }  
  function handlePianoAdd(event) {
    event.preventDefault();
    let newInstrument = event.target.instrument.value
    let beat = event.target.beat.value
    props.addInstrument(newInstrument, (beat -1));
  }

  function addBeats(ticks) {
    let beatArray = []
    for (let b = 1; b <= ticks; b++) {
      beatArray.push(<option value={String(b)}>{b}</option>)
    }
    return beatArray
  }

  let sounds = ["cowbell", "conga_hi", "cymbal", "conga_mid", "conga_low", "hihat_open", "tom_hi", "maracas", "tom_mid", "hihat_closed", "tom_low", "clave", "clap", "snare", "rim", "kick"]

  function addSounds(sounds) {
    let soundArray = []
    sounds.forEach(element => soundArray.push(<option value={element}>{element}</option>))
    return soundArray
  }

return (
  <div>
    <p>A bar has 16 beats 4 quarters and 16 16ths. Choose the corresponding position in the beat structure to add a note.</p>
    <form onSubmit={handleInstrumentAdd}>
      <label>Pick drum noise:
        <select name="instrument">
          {addSounds(sounds)}
        </select>
        <select name="beat">
            {addBeats(props.playInstrument.length)}
        </select>
      </label>
      <button type="submit">Add too loop</button>
    </form>
    <form onSubmit={handlePianoAdd}>
      <label>Pick piano note:
        <select name="instrument">
          {addSounds(Object.keys(props.piano._sprite))}
        </select>
        <select name="beat">
            {addBeats(props.playInstrument.length)}
        </select>
      </label>
      <button type="submit">Add too loop</button>
    </form>

    <button onClick={()=> props.resetLoop()}>Reset Loop</button>
    </div>
  )
}

InstrumentForm.propTypes ={
  handleChange: PropTypes.func,
  playInstrument: PropTypes.array,
  addInstrument: PropTypes.func,
  resetLoop: PropTypes.func
  }

export default InstrumentForm

// Play math not using setInterval

// Time is in ms

// getTime() ((tempo * 1000) = second beat time - current time) (Tempo needs to contain all notes in it. so if Tempo is 2000, 8th notes occur on the 1000 ms, 16ths on the 500)