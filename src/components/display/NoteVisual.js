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
    return createDivs(instruments.sort(), arrayOfNotes)
  }

  function createRows(instruments, arrayOfNotes) {
    let rowArray = []
    instruments.forEach(function(instrument, key) {
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
        <Row className="gutter" id="instrument" xs="auto" key={instrument}>
          <Col xs={1} key="instrument">{instrument}</Col>
          {colArray}
        </Row>
      )
    })
    return rowArray
  }

  function createDivs(instruments, arrayOfNotes) {
    let outerDivArray = []
    instruments.forEach(function(instrument, key) {
      let innerDivArray = []
      let buttonSequence = []
      for (let i = 1; i < 17; i++) {
        let checkArray = arrayOfNotes[i - 1]
        if (checkArray.includes(instrument)) {
          buttonSequence.push(<Button key={i} variant="primary" className="selected" onClick={() => props.removeInstrument(instrument, i - 1)}></Button>)
        } else {
          buttonSequence.push(<Button key={i} variant="warning" className="unselected" onClick={() => props.addInstrument(instrument, i - 1)}></Button>)
        }
        if (i % 4 === 0) {
          innerDivArray.push(<div id='inner-div' key={i + "bar"}>{buttonSequence}</div>)
          buttonSequence = []
        }
      }
      outerDivArray.push(
        <div id="instrument-row" key={instrument}>
          <div key={instrument + "name"} id="instrument-name">{instrument}</div>
          {innerDivArray}
        </div>
      )
    })
    return outerDivArray
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
}

export default NoteVisual


