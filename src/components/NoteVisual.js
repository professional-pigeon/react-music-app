import React from 'react'
import PropTypes from "prop-types"
import { Row } from 'react-bootstrap'

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
    return createRows(instruments)
  }

  function createRows(instruments) {
    let rowArray = []
    instruments.forEach(function(instrument) {
      rowArray.push(<Row>{instrument}</Row>)
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
