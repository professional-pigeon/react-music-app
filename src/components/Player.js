import React from 'react'

function Player(props) {

  function handleTempoChange(event) {
    event.preventDefault();
    let newTempo = event.target.tempo.value
    props.setNewTempo(newTempo);
  }


  return (
    <div>
      <p>Tempo in BPM: {props.useTempo}</p>
      <form onSubmit={handleTempoChange}>
        <label>Set Tempo:</label>
        <input type="number" name="tempo" />
        <button type="submit">Change Tempo</button>
      </form>
    </div>
  )

}

export default Player

{/* <select value={props.playInstrument2} onChange={handleInstrumentChange}> */}