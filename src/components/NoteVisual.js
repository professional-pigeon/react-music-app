import React from 'react'
import PropTypes from "prop-types"
import { Row, Col } from 'react-bootstrap'

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
          colArray.push(<Col>{instrument}</Col>)
        } else {
          colArray.push(<Col>x</Col>)
        }
      }
      rowArray.push(
      <Row>
        <Col>{instrument}</Col>
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

NoteVisual.propTypes = {

}

export default NoteVisual
