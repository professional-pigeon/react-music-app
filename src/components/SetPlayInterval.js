import React from 'react'


function SetPlayInterval(arrayOfSounds, tempo, drumMachine) {

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
      if (n > 3)  {
        n = resetN()
      }
      console.log(n)
      drumMachine.play(arr[n])
    }
  
    setInterval(function() { 
      playSoundAtInterval(arrayOfSounds); 
      }, 
      (60000 / tempo))

    return console.log("this happened should see ticker")
    
  }

  export default SetPlayInterval