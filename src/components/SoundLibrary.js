import lowWoodBlock from "../sounds/Low-Wood-Block.mp3"
import { Howl, Howler } from 'howler'

function SoundLibrary() {

  return { 
    lowBlock: new Howl({
    src: lowWoodBlock,
    volume: 1.0,
    }) 
  }

}

export default SoundLibrary