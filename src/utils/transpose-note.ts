import { Note, NoteAccidental, NoteLetter } from '../types';

export const transposeNote = (note: Note, transpose: number): Note => {
  let noteValue = note.letter + transpose + (note.accidental || NoteAccidental.Natural);
  let newModifier = NoteAccidental.Natural;
  let newOctave = note.octave;
  // if note is even , then look if it's in the enum Note
  // if it is , then set NoteModifier to Natural
  // if it's not , then subtract Two and put modifier to Sharp
  // if note is odd , then look for the closest value in the enum Note that's above or below it by only 1
  // if the note is above , then set the modifier to half flat
  // if the found note is below , hen set the modifier to half sharp

  // if newnote is higher than the highest note in the enum Note
  // then set the newnote to the highest modulus the highest note in the enum Note
  // and set the octave to the division of the newnote by the highest note in the enum Note
  // if newnote is lower than the lowest note in the enum Note
  // then set the newnote to the lowest modulus the lowest note in the enum Note
  // and set the octave to the division of the newnote by the lowest note in the enum Note
  // if newnote is between the highest and lowest note in the enum Note
  // then set the octave to 0
  if (noteValue > NoteLetter.Si) {
    newOctave = note.octave + Math.floor(noteValue / NoteLetter.Si);
    noteValue = noteValue % NoteLetter.Si;
  } else if (noteValue < NoteLetter.Do) {
    const multiplier = Math.ceil(Math.abs(noteValue) / NoteLetter.Si) || 1;
    noteValue = noteValue + NoteLetter.Si * multiplier;
    newOctave = note.octave - multiplier;
  }

  if (noteValue == 0) {
    noteValue = NoteLetter.Si;
    newModifier = NoteAccidental.Natural;
  } else if (noteValue % 2 === 0) {
    if (noteValue in NoteLetter) {
      newModifier = NoteAccidental.Natural;
    } else {
      noteValue = noteValue - 2;
      newModifier = NoteAccidental.Sharp;
    }
  } else {
    if (noteValue + 1 in NoteLetter) {
      noteValue = noteValue + 1;
      newModifier = NoteAccidental.HalfFlat;
    } else {
      noteValue = noteValue - 1;
      newModifier = NoteAccidental.HalfSharp;
    }
  }

  // if newOctave is less than zero , throw an error
  // if newOctave is greater than 8 , throw an error
  if (newOctave < 0 || newOctave > 8) {
    throw new Error('Octave is out of range');
  }

  return new Note(noteValue, newOctave, newModifier);
};
