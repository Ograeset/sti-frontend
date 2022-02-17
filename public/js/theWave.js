import * as Tone from 'tone'

const synth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
synth.set({ detune: -1200 });
// play a chord
synth.triggerAttackRelease(["C4", "E4", "A4"], 1);

document.getElementById("play-button").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});