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
  let rootIdx = notes.indexOf(root);
  console.log(rootIdx);
  console.log(notes.length);
  console.log(rootIdx + 4 >= notes.length)
  let majorChord = [];
  let minorChord = [];
  let mid = 0;
  if (rootIdx + 4 >= notes.length) {
    mid = (rootIdx + 4) - notes.length;
  } else {
    mid = rootIdx + 4;
  }
  console.log(mid);
//   return [majorChord, minorChord];
}
