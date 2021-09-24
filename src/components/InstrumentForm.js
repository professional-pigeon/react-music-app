import React from 'react'
import PropTypes from "prop-types"

function InstrumentForm(props) {

  function handleInstrumentAdd(event) {
    event.preventDefault();
    let newInstrument = event.target.instrument.value
    let beat = event.target.beat.value
    props.addInstrument(newInstrument, beat);
  }

  function addBeats(ticks) {
    let beatArray = []
    for (let b = 1; b <= ticks; b++) {
      beatArray.push(<option value={String(b)}>{b}</option>)
    }
    return beatArray
  }

return (
  <div>
    <p>A bar has 16 beats 4 quarters and 16 16ths. Choose the corresponding position in the beat structure to add a note.</p>
    <form onSubmit={handleInstrumentAdd}>
      <label>Pick a sound:
        <select name="instrument">
          <option selected value="clap">Clap</option>
          <option value="cowbell">Cowbell</option>
          <option value="cymbal">Cymbal</option>
          <option value="hihat_open">Hi-hat Open</option>
          <option value="hihat_closed">Hi-hat Closed</option>
          <option value="conga_hi"> Conga High</option>
          <option value="conga_mid">Conga Mid</option>
          <option value="conga_low">Conga Low</option>
          <option value="maracas">Maracas</option>
          <option value="clave">Clave</option>
          <option value="tom_hi">Tom High</option>
          <option value="tom_mid">Tom Mid</option>
          <option value="tom_low">Tom Low</option>
          <option value="snare">Snare</option>
          <option value="rim">Rim</option>
          <option value="kick">Kick</option>
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