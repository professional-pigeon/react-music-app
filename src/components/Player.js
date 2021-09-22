import React from 'react'

function Player(props) {

  function handleTempoChange(event) {
    event.preventDefault();
    let newTempo = event.target.name.value
    props.changeTempo(newTempo);
  }


  return (
    <div>
      <p>Tempo in BPM: {props.useTempo}</p>
      <form onSubmit={handleTempoChange}>
        <label>Set Tempo:</label>
        <input type="number" name="tempo" />
        <button type="submit">Change Tempo</button>
      </form>
      <button onClick={() => props.playMusic(props.sound, props.useTempo, props.playState, props.interval)}>Stop or Play music</button>
    </div>
  )

}

export default Player

{/* <select value={props.playInstrument2} onChange={handleInstrumentChange}> */}