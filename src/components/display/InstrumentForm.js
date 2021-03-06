import React from 'react';
import PropTypes from "prop-types";
import { Button, Form } from 'react-bootstrap';

function InstrumentForm(props) {

  function handleInstrumentAdd(event) {
    event.preventDefault();
    let newInstrument = event.target.instrument.value
    let beat = event.target.beat.value
    props.addInstrument(newInstrument, (beat -1));
  }  

  function addBeats(ticks) {
    let beatArray = []
    for (let b = 1; b <= ticks; b++) {
      beatArray.push(<option value={String(b)} key={b}>{b}</option>)
    }
    return beatArray
  }

  let sounds = ["cowbell", "conga_hi", "cymbal", "conga_mid", "conga_low", "hihat_open", "tom_hi", "maracas", "tom_mid", "hihat_closed", "tom_low", "clave", "clap", "snare", "rim", "kick"]

  function addSounds(sounds) {
    let soundArray = []
    sounds.forEach((element, key) => soundArray.push(<option value={element} key={key}>{element}</option>))
    return soundArray
  }

return (
    <Form onSubmit={handleInstrumentAdd} className='instrument-form'>
    <h3>Add Instrument</h3>
      <Form.Label>Add drum noise:</Form.Label>
      <Form.Select name="instrument">
        {addSounds(sounds)}
      </Form.Select>
      <Form.Label>Select beat:</Form.Label>
      <Form.Select name="beat">
        {addBeats(props.playInstrument.length)}
      </Form.Select>
      <Button variant="primary" type="submit">Add to loop</Button>
    </Form>
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