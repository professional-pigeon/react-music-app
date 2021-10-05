import lowWoodBlock from "../../sounds/Low-Wood-Block.mp3"
import { Howl } from 'howler'
import spriteSounds from "../../sounds/sprite.mp3"
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
    src: ['../../sonunds/piano.mp3'],
    sprite: { C2: [0,10000], Db2: [10000,20000], D2: [20000,30000], Eb2: [30000,40000], E2: [40000,50000], F2: [50000,60000], Gb2: [60000,70000], G2: [70000,80000], Ab2: [80000,90000], A2: [90000,100000], Bb2: [100000,110000], B2: [110000,120000], C3: [120000,130000], Db3: [130000,140000], D3: [140000,150000], Eb3: [150000,160000], E3: [160000,170000], F3: [170000,180000], Gb3: [180000,190000], G3: [190000,200000], Ab3: [200000,210000], A3: [210000,220000], Bb3: [220000,230000], B3: [230000,240000], C4: [240000,250000], Db4: [250000,260000], D4: [260000,270000], Eb4: [270000,280000], E4: [280000,290000], F4: [290000,300000], Gb4: [300000,310000], G4: [310000,320000], Ab4: [320000,330000], A4: [330000,340000], Bb4: [340000,350000], B4: [350000,360000], C5: [360000,370000], Db5: [370000,380000], D5: [380000,390000], Eb5: [390000,400000], E5: [400000,410000]}
    })
  }
}

export default SoundLibrary