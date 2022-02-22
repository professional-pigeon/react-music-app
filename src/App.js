import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SoundControl from './components/SoundControl'
import HeaderControl from './components/header/HeaderControl';
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div>
      <HeaderControl />
      <div className='main'>
        <SoundControl />
      </div>
    </div>
  );
}

export default App;

// CSS note: This is the appropriate place for a container. check after removing other css.