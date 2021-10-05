// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let oscList = [];
// let mainGainNode = null;
// let wave = "sine"
// let noteFreq = null;
// let customWaveform = null;
// let sineTerms = null;
// let cosineTerms = null;

// function createNoteTable() {
//   let noteFreq = [];
//   for (let i=0; i< 9; i++) {
//     noteFreq[i] = [];
//   }
// }

// noteFreq[1]["D"] = 36.708095989675945;

// function playTone(freq) {
//   let osc = audioContext.createOscillator();
//   osc.connect(mainGainNode);

//   let type = wavePicker.options[wavePicker.selectedIndex].value;

//   if (type == "custom") {
//     osc.setPeriodicWave(customWaveform);
//   } else {
//     osc.type = type;
//   }

//   osc.frequency.value = freq;
//   osc.start();
//   osc.stop(60000)

//   return osc;
// }


   
import Ember from 'ember';

export default Ember.Service.extend({
  audioService: Ember.inject.service(),

  tickCount: 0,
  song: null,
  isPlaying: false,
  tempo: Ember.computed.alias('song.tempo'),

  next() {
    let tickCount = this.incrementProperty('tickCount');
    this.playTick(tickCount);
  },

  play() {
    this.setProperties({
      isPlaying: true,
      tickCount: 0
    });
    this.tick();
  },

  stop() {
    this.set('isPlaying', false);
  },

  tick() {
    if(this.get('isPlaying')) {
      let tickCount = this.incrementProperty('tickCount');
      this.playTick(tickCount);

      Ember.run.later(this, this.tick, this.get('tickInterval'));
    }
  },

  playTick(tickCount) {
    let song = this.get('song');
    song.setTick(tickCount);
    let notes = song.getCurrentNotes();

    this.get('audioService').playNotes(notes);
  },

  tickInterval: Ember.computed('song.tempo', function() {
    let beatsPerSecond = this.get('song.tempo') / 60;
    let sixteenthsPerSecond = beatsPerSecond * 4;
    let tickInterval = 1000 / sixteenthsPerSecond;
    return tickInterval;
  }),

  display: Ember.computed('bars', 'beats', 'sixteenths', function() {
    let bars = this.get('bars');
    let beats = this.get('beats');
    let sixteenths = this.get('sixteenths');

    return `${bars}:${beats}:${sixteenths}`;
  }),

  bars: Ember.computed('tickCount', function() {
    return Math.floor(this.get('tickCount') / 16) + 1;
  }),

  beats: Ember.computed('tickCount', function() {
    return (Math.floor((this.get('tickCount')) / 4) % 4) + 1;
  }),

  sixteenths: Ember.computed('tickCount', function() {
    return (this.get('tickCount') % 4) + 1;
  })
});