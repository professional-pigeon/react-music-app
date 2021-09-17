import './App.css';
import Metronome from './Metronome'
import Canvas from './Canvas'

function App() {

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
  }
  
  return (
    <>
      <Metronome />
      <Canvas draw={draw}/>
    </>
  );
}


export default App;
