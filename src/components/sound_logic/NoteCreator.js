function noteCreator(startingFrequency) {
  let output = { "A-0": startingFrequency }
  let frequency = startingFrequency
  let i = 0
  let octave = 0
  let noteNum = 10
  let noteArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",]
  while (i < 53) {
    frequency = frequency * (Math.pow(2, (1/12)))
    output[noteArray[noteNum] + "-" + octave] = (frequency)
    if (noteNum === 11) {
      noteNum = 0
      octave++
    } else {
      noteNum++
    }
    i++
  }
  return output
}

export default noteCreator