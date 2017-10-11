// In Western music, a major chord (major third) starts at a root note and adds
// the note 4 semitones and 7 semitones above it.

// A minor chord (minor third) starts at a root note and adds the note 3
// semitones and 7 semitones above it.

// Given a root note, please return an array of the major chord and the minor
// chord for that root.

// The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as
// a constant

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords(root) {
  //your code here
  let start = notes.indexOf(root);
  console.log(start);
  console.log(notes.length);

//   return [majorChord, minorChord];
}
