import React from 'react'
import PropTypes from "prop-types"
import { Row, Col, Button } from 'react-bootstrap'
import './App.css'

function NoteVisual(props) {
  console.log(props.seePianoNote)

  function createInstrumentList(arrayOfNotes) {
    let instruments = []
    arrayOfNotes.forEach(function(instrumentList) {
      instrumentList.forEach(function(sound) {
        if (instruments.includes(sound) === false && sound != 'b') {
          instruments.push(sound)
        }
      })
    })
    return createRows(instruments, arrayOfNotes)
  }

  function createRows(instruments, arrayOfNotes) {
    let rowArray = []
    instruments.forEach(function(instrument) {
      if (instrument.length > 3) {
      let colArray = []
      for (let i = 0; i < arrayOfNotes.length; i++) {
        let checkArray = arrayOfNotes[i]
        if (checkArray.includes(instrument)) {
          colArray.push(<Col sm="auto"><Button variant="outline-primary" className="selected" onClick={() => props.removeInstrument(instrument, i)}></Button></Col>)
        } else {
          colArray.push(<Col sm="auto"><Button variant="outline-info" className="unselected" onClick={() => props.addInstrument(instrument, i)}></Button></Col>)
        }
      }
      rowArray.push(
      <Row className="gutter" xs="auto">
        <Col xs={1} className="LeftMostCol">{instrument}</Col>
        {colArray}
      </Row>)
    }
  })
    return rowArray
  }

  function pianoNote(arrayOfNotes) {
    let pianoNoteOnBeat = [];
    let largeArray = []
    let notes = []
    for (let i = 0; i < arrayOfNotes.length; i++) {
      arrayOfNotes[i].forEach(function(note) {
        if (note.length < 4 && note !== 'b') {
          pianoNoteOnBeat.push(note)
        }
      })
      if (pianoNoteOnBeat[0] !== undefined) {
        notes = pianoNoteOnBeat
        largeArray.push(<Col sm="auto"><Button variant="outline-primary" className="selected" onClick={() => props.seePianoNote(notes, i)}></Button></Col>)
      } else {
        largeArray.push(<Col sm="auto"><Button variant="outline-info" className="unselected" onclick={() => props.setBeat(i)}></Button></Col>)
      }
      pianoNoteOnBeat = []
    }
    return largeArray
  }

return (
  <div>
    {createInstrumentList(props.playInstrument)}
    <Row className="gutter" xs="auto">
        <Col xs={1} className="LeftMostCol">Piano</Col>
        {pianoNote(props.playInstrument)}
    </Row>
  </div>
)
}

NoteVisual.propTypes = {

}

export default NoteVisual