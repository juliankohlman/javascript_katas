// In Western music, a major chord (major third) starts at a root note and adds
// the note 4 semitones and 7 semitones above it.

// A minor chord (minor third) starts at a root note and adds the note 3
// semitones and 7 semitones above it.

// Given a root note, please return an array of the major chord and the minor
// chord for that root.

// The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as
// a constant

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords (root) {
  let rt = notes.indexOf(root);
  let mid = rt + 4 >= notes.length ? (rt + 4) - notes.length : rt + 4;
  let midMin = rt + 3 >= notes.length ? (rt + 3) - notes.length : rt + 3;
  let last = rt + 7 >= notes.length ? (rt + 7) - notes.length : rt + 7;

  return [ [root, notes[mid], notes[last]], [root, notes[midMin], notes[last]] ];
}

chords('C') // [['C','E','G'],['C','D#','G']]
chords('F') // [['F','A','C'],['F','G#','C']]
chords('G') // [['G','B','D'],['G','A#','D']]
