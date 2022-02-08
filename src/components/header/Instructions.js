import React from 'react'
import './Header.css'

function Instructions({ close }) {
  return (
    <div className='popUpBox'>
      <div className='box'>
      <span className="closeIcon" onClick={close}>x</span>
      <p>Thank you for trying out my music app. It currently contains a drum machine and a piano.</p>
      <ul>
        <li>Click the play button to start your loop, and the stop button to stop the loop</li>
        <li>You can reset the whole loop with the reset button</li>
        <li>to add a new drum noise, select the drum noise from the drop down and choose which beat to put it on</li>
        <li>Once an instrument is showing you can click the corresponding buttons to add or remove a note from that space</li>
        <li>To add 1 beat of 16th notes to the loop, hit the add beats button</li>
        <li>To add piano notes, select the beat on the piano and choose which notes to add remove</li>
        <li>You can also change the Tempo in the set tempo field</li>
      </ul>
      </div>
    </div>
  )
}

export default Instructions