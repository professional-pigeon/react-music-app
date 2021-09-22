import './App.css';
import SoundControl from './SoundControl'
import DrawControl from './draw_components/DrawControl'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <SoundControl />
      {/* <DrawControl /> */}
    </Container>
  );
}


export default App;
