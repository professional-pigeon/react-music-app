function noteCreator(startingFrequency) {
  let output = {}
  let frequency = startingFrequency
  let i = 0
  let octave = 0
  let noteArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",]
  while (i < 53) {
    frequency = frequency * (Math.pow(2, (1/12)))
    output[noteArray[i]](frequency)
   	i++
  }
  // lowest is A
  return output
}

// this will get you a 53 note range by frequency in Hertz