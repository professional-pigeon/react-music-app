import React from 'react'
import SelectForm from './SelectForm'

function InstrumentForm(props) {
  let beats = props.beatsLength

  function handleInstrumentAdd(event) {
    event.preventDefault();
    let newInstrument = event.target.instrument.value
    let beat = event.target.beat.value
    props.addInstrument(newInstrument, beat);
  }



  function addBeats(beats) {
    console.log(beats)
    for (let b = 1; b === beats; b++) {
      console.log("it got here")
      return <option value={String(b)}>{b}</option>
    }
  }

  let thing = addBeats(beats)

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
          {thing}
          {/* <option value="1">1</option>
          <option value="2">2 (1-e)</option>
          <option value="3">3 (1-and)</option>
          <option value="4">4 (1-uh</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option> */}
      </select>
      </label>
      <button type="submit">Add too loop</button>
    </form>
    <button onClick={()=> props.resetLoop()}>Reset Loop</button>
    </div>
  )
}

export default InstrumentForm