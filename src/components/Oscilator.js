function playOscillator(freq) {
  let audioContext = new window.AudioContext();
  let osc = audioContext.createOscillator();
  let mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = 0.5
  osc.type = 'triangle';
  osc.frequency.value = freq;

  osc.connect(mainGainNode)
  console.log(osc)
  osc.start();
  osc.stop(.5)
  console.log("here")
  return osc;
}

export default playOscillator