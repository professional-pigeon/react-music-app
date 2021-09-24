import React from 'react'
import PropTypes from "prop-types"
import { Row, Col } from 'react-bootstrap'

function NoteVisual(props) {

  function createInstrumentList(arrayOfNotes) {
    let instruments = []
    arrayOfNotes.forEach(function(instrumentList) {
      instrumentList.forEach(function(sound) {
        if (instruments.includes(sound) === false) {
          instruments.push(sound)
        }
      })
    })
    return createRows(instruments, arrayOfNotes.length)
  }

  function createRows(instruments, beats) {
    let rowArray = []
    let colArray = []
    for (let i = 0; i <= beats; i++) {
      colArray.push(<Col>Beat{i}</Col>)
    }
    console.log(colArray)
    instruments.forEach(function(instrument) {

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
