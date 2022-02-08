import lowWoodBlock from "../../sounds/Low-Wood-Block.mp3";
import { Howl } from 'howler';
import spriteSounds from "../../sounds/sprite.mp3";
import piano from "../../sounds/piano.mp3";
import noteCreator from "./NoteCreator";

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
    volume: 0.3,
    sprite: { C2: [0, 500],
        Db2: [10000, 500], 
        D2: [20000, 500], 
        Eb2: [30000, 500], 
        E2: [40000, 500], 
        F2: [50000, 500], 
        Gb2: [60000, 500], 
        G2: [70000, 500], 
        Ab2: [80000, 500], 
        A2: [90000, 500], 
        Bb2: [100000, 500], 
        B2: [110000, 500], 
        C3: [120000, 500], 
        Db3: [130000, 500], 
        D3: [140000, 500], 
        Eb3: [150000, 500], 
        E3: [160000, 500], 
        F3: [170000, 500], 
        Gb3: [180000, 500], 
        G3: [190000, 500], 
        Ab3: [200000, 500], 
        A3: [210000, 500], 
        Bb3: [220000, 500], 
        B3: [230000, 500], 
        C4: [240000, 500], 
        Db4: [250000, 500], 
        D4: [260000, 5000], 
        Eb4: [270000, 500], 
        E4: [280000, 500], 
        F4: [290000, 5000], 
        Gb4: [300000, 500], 
        G4: [310000, 500], 
        Ab4: [320000, 500], 
        A4: [330000, 500], 
        Bb4: [340000, 500], 
        B4: [350000, 500], 
        C5: [360000, 500], 
        Db5: [370000, 500],
        D5: [380000, 500], 
        Eb5: [390000, 500], 
        E5: [400000, 500]}
    })
  }
}

export default SoundLibrary