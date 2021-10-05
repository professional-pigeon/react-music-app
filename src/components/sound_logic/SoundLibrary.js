import lowWoodBlock from "../../sounds/Low-Wood-Block.mp3"
import { Howl } from 'howler'
import spriteSounds from "../../sounds/sprite.mp3"
import piano from "../../sounds/piano.mp3"
import noteCreator from "./NoteCreator"

let noteFreq = noteCreator(27.500)

function SoundLibrary() {

  return { 
    frequency: noteFreq,
    lowBlock: new Howl({
    src: lowWoodBlock,
    volume: 1.0,
    }), 
    drumMachine: new Howl({
      src: spriteSounds,
      sprite: {
        cowbell: [0, 300],
        conga_hi: [400, 300],
        cymbal: [807, 3640],
        conga_mid: [4455, 202],
        conga_low: [4863, 343],
        hihat_open: [5268, 706],
        tom_hi: [6277, 206],
        maracas: [6684, 53],
        tom_mid: [7092, 263],
        hihat_closed: [7496, 90],
        tom_low: [7903, 370],
        clave: [8307, 44],
        clap: [8712, 208],
        snare: [9116, 137],
        rim: [9521, 36],
        kick: [9929, 390]
      }
    }),
    piano: new Howl({
    src: piano,
    sprite: { C2: [0, 1000],
        Db2: [10000, 1000], 
        D2: [20000, 1000], 
        Eb2: [30000, 1000], 
        E2: [40000, 1000], 
        F2: [50000, 1000], 
        Gb2: [60000, 1000], 
        G2: [70000, 1000], 
        Ab2: [80000, 1000], 
        A2: [90000, 1000], 
        Bb2: [100000, 1000], 
        B2: [110000, 1000], 
        C3: [120000, 1000], 
        Db3: [130000, 1000], 
        D3: [140000, 1000], 
        Eb3: [150000, 1000], 
        E3: [160000, 1000], 
        F3: [170000, 1000], 
        Gb3: [180000, 1000], 
        G3: [190000, 1000], 
        Ab3: [200000, 1000], 
        A3: [210000, 1000], 
        Bb3: [220000, 1000], 
        B3: [230000, 1000], 
        C4: [240000, 1000], 
        Db4: [250000, 1000], 
        D4: [260000, 10000], 
        Eb4: [270000, 1000], 
        E4: [280000, 1000], 
        F4: [290000, 10000], 
        Gb4: [300000, 1000], 
        G4: [310000, 1000], 
        Ab4: [320000, 1000], 
        A4: [330000, 1000], 
        Bb4: [340000, 1000], 
        B4: [350000, 1000], 
        C5: [360000, 1000], 
        Db5: [370000, 1000],
        D5: [380000, 1000], 
        Eb5: [390000, 1000], 
        E5: [400000, 1000]}
    })
  }
}

export default SoundLibrary