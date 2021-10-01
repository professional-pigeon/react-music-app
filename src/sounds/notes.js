function noteCreator(startingFrequency) {
  let output = { "A-0": startingFrequency }
  let frequency = startingFrequency
  let i = 0
  let octave = 0
  let noteNum = 10
  let noteArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",]
  console.log(noteArray[noteNum] + "-" + octave)
  while (i < 97) {
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