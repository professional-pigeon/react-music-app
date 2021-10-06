import { Col, Row } from 'react-bootstrap'


function PianoVisual(props) {
  const notes = Object.keys(props.pianoNotes._sprite)
  let displayNotes = props.displayNotes
  let keys = []
  notes.forEach(function(note){
    if (displayNotes.includes(note) === true) {
      keys.push(<Col className="keys-highlight">{note}</Col>)
    } else {
      keys.push(<Col className="keys">{note}</Col>)
    }
  })
  

  return (
    <div id="keyboard">
      <Row>
        {keys}
      </Row>
    </div>
  )
}

export default PianoVisual