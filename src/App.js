import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SoundControl from './components/SoundControl'
import HeaderControl from './components/header/HeaderControl';
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div>
    <HeaderControl />
    <Container>
      <SoundControl />
    </Container>
    </div>
  );
}


export default App;
