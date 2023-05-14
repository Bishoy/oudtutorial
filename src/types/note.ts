// This type should act like an enum with numeric values to represent the note and should be translateable
// to other languages. The values should be the MIDI note numbers.

import { NoteAccidental } from './note-accidental';

export const DefaultOctave = 3;

export enum NoteLetter {
  Do = 2,
  Re = 6,
  Mi = 10,
  Fa = 12,
  Sol = 16,
  La = 20,
  Si = 24
}

export class Note {
  constructor(
    public letter: NoteLetter,
    public octave: number = DefaultOctave,
    public accidental: NoteAccidental = NoteAccidental.Natural
  ) {}
}
