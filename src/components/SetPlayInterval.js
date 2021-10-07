function SetPlayInterval(arrayOfSounds, tempo, soundObject) {
    let module = {
      n: 0,
      upN: function() {
        this.n = this.n +1
        return this.n
      },
      resetN: function() {
        this.n = 0
        return this.n
      }
    }
    const unboundN = module.upN
    const getN = unboundN.bind(module)
    const unboundReset = module.resetN
    const resetN = unboundReset.bind(module)
    
    let playSoundAtInterval = (arr) => {
      let n = getN() - 1
      arr[n].forEach(function(sound) {
        if (sound !== undefined)
          soundObject.play(sound)
        })
      if (n > arr.length -2 )  {
        n = resetN()
      }
    }

    let intervalID = setInterval(function() { 
      playSoundAtInterval(arrayOfSounds); 
      }, 
      (60000 / (tempo * 4)))

    return intervalID
  }

export default SetPlayInterval
