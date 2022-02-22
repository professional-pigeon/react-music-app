import React from 'react';
import PropTypes from "prop-types";
import { Row, Col, Button } from 'react-bootstrap';

function NoteVisual(props) {

  function createInstrumentList(arrayOfNotes) {
    let instruments = []
    arrayOfNotes.forEach(function(instrumentList) {
      instrumentList.forEach(function(sound) {
        if (instruments.includes(sound) === false && sound !== 'b') {
          instruments.push(sound)
        }
      })
    })
    return createRows(instruments, arrayOfNotes)
  }

  function createRows(instruments, arrayOfNotes) {
    let rowArray = []
    instruments.forEach(function(instrument, key) {
      if (instrument.length > 3) {
        let colArray = []
        for (let i = 0; i < arrayOfNotes.length; i++) {
          let checkArray = arrayOfNotes[i]
          if (checkArray.includes(instrument)) {
            colArray.push(<Col sm="auto" key={key + i}><Button variant="primary" className="selected" onClick={() => props.removeInstrument(instrument, i)}></Button></Col>)
          } else {
            colArray.push(<Col sm="auto" key={key + i}><Button variant="warning" className="unselected" onClick={() => props.addInstrument(instrument, i)}></Button></Col>)
          }
        }
        rowArray.push(
          <Row className="gutter" id="instrument" xs="auto" key={key}>
            <Col xs={1} className="LeftMostCol" key="instrument">{instrument}</Col>
            {colArray}
          </Row>
        )
      }
    })
    return rowArray
  }

return (
  <div id="buttonRow" className='sub-main notes'>
    {createInstrumentList(props.playInstrument)}
  </div>
)
}

NoteVisual.propTypes = {
  playInstrument: PropTypes.array,
  addInstrument: PropTypes.func,
  removeInstrument: PropTypes.func,
  seePianoNote: PropTypes.func,
  setNewBeat: PropTypes.func
}

export default NoteVisual