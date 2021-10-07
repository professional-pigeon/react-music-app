function playOscillator(freq) {
  let audioContext = new window.AudioContext();
  let osc = audioContext.createOscillator();
  let mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = 0.5
  osc.type = 'sawtooth';
  osc.frequency.value = freq;

  osc.connect(mainGainNode)
  osc.start();
  osc.stop(.5)
  return osc;
}

export default playOscillator