import React from 'react'

function InstrumentForm(props) {


  function handleInstrumentChange(event) {
    event.preventDefault();
    let newInstrument = event.target.value
    props.changeInstrument(newInstrument);
  }

return (
    <form>
      <label>Pick a sound:
        <select value={props.playInstrument2} onChange={handleInstrumentChange}>
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
      </label>
    </form>
  )
}

export default InstrumentForm