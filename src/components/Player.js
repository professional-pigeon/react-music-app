import React from 'react'

function Player(props) {

  return (
    <div>
      <p>Tempo in BPM: {props.useTempo}</p>
      <button onClick={() => props.upTempo()}>add tempo</button>
      <button onClick={() => props.playMusic(props.sound, props.useTempo, props.playState, props.interval)}>Stop or Play music</button>
      <button onClick={() => props.downTempo()}>subtract tempo</button>
    </div>
  )

}

export default Player