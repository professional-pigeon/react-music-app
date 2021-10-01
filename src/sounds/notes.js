function noteCreator(startingFrequency) {
  let output = []
  let frequency = startingFrequency
  let i = 0
  while (i < 4) {
    frequency = frequency * (Math.pow(2, (1/12)))
    output.push(frequency)
   	i++
  }
  return output
}

// this will get you a 53 note range by frequency in Hertz