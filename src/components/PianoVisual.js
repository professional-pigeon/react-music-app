import { Col, Row } from 'react-bootstrap'


function PianoVisual(props) {
  const notes = Object.keys(props.pianoNotes._sprite)
  console.log(notes)
  let keys = []
  notes.forEach(function(note){
    keys.push(<Col>{note}</Col>)
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