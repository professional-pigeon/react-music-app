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
    sprite: { C2: [0, 200],
        Db2: [2000, 200], 
        D2: [20000, 200], 
        Eb2: [30000, 200], 
        E2: [40000, 200], 
        F2: [50000, 200], 
        Gb2: [60000, 200], 
        G2: [70000, 200], 
        Ab2: [80000, 200], 
        A2: [90000, 200], 
        Bb2: [20000, 200], 
        B2: [12000, 200], 
        C3: [120000, 200], 
        Db3: [130000, 200], 
        D3: [140000, 200], 
        Eb3: [150000, 200], 
        E3: [160000, 200], 
        F3: [170000, 200], 
        Gb3: [180000, 200], 
        G3: [190000, 200], 
        Ab3: [200000, 200], 
        A3: [22000, 200], 
        Bb3: [220000, 200], 
        B3: [230000, 200], 
        C4: [240000, 200], 
        Db4: [250000, 200], 
        D4: [260000, 2000], 
        Eb4: [270000, 200], 
        E4: [280000, 200], 
        F4: [290000, 2000], 
        Gb4: [300000, 200], 
        G4: [32000, 200], 
        Ab4: [320000, 200], 
        A4: [330000, 200], 
        Bb4: [340000, 200], 
        B4: [350000, 200], 
        C5: [360000, 200], 
        Db5: [370000, 200],
        D5: [380000, 200], 
        Eb5: [390000, 200], 
        E5: [400000, 200]}
    })
  }
}

export default SoundLibrary