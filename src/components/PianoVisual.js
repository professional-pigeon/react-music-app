import { Col, Row, Container } from 'react-bootstrap'


function PianoVisual(props) {
  const notes = Object.keys(props.pianoNotes._sprite)
  let displayNotes = props.displayNotes
  let keys = []
  notes.forEach(function(note){
    if (displayNotes.includes(note) === true) {
      keys.push(<Col className="keys-highlight" id={note} onClick={() => props.removeNote(note, props.beat)}>{note}</Col>)
    } else {

      keys.push(<Col className="keys" id={note} onClick={() => props.addNote(note, props.beat)}>{note}</Col>)
    }
  })

  return (
    <Container id="keyboard">
      <Row>
        {keys}
      </Row>
    </Container>
  )
}

export default PianoVisual