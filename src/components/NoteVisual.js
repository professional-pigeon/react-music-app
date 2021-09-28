import React from 'react'
import PropTypes from "prop-types"
import { Row, Col, Button } from 'react-bootstrap'
import './App.css'

function NoteVisual(props) {

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
      let colArray = []
      for (let i = 0; i < arrayOfNotes.length; i++) {
        let checkArray = arrayOfNotes[i]
        if (checkArray.includes(instrument)) {
          colArray.push(<Col sm="auto"><Button variant="outline-primary" onClick={() => props.removeInstrument(instrument, i)}>X</Button></Col>)
        } else {
          colArray.push(<Col sm="auto"><Button variant="outline-info" onClick={() => props.addInstrument(instrument, i)}>O</Button></Col>)
        }
      }
      rowArray.push(
      <Row>
        <Col xs={1} className="LeftMostCol">{instrument}</Col>
        {colArray}
      </Row>)
    })
    return rowArray
  }

return (
  <div>
    <p>{createInstrumentList(props.playInstrument)}</p>
  </div>
)
}

// NoteVisual.propTypes = {

// }

export default NoteVisual
