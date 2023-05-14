// create a new component called Solfege
// Solfege is a musical term for the syllables used to sing a scale
// https://en.wikipedia.org/wiki/Solf%C3%A8ge
// this component will take an array of notes that will be of type enum Note
// The component should have a prop to determine the transpose amount and should default to 0
// the notes should be displayed in a div
// the notes should also have an octave number
// the octave number should be displayed in a smaller font size

// Path: src/components/solfege.tsx

import * as React from 'react';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
import { Note } from '../types';
import { NoteView } from './note-view';
import { transposeNote } from '../utils';

interface SolfegeProps {
  notes: Note[];
  transpose?: number;
}

const Solfege = (props: SolfegeProps) => {
  const [notes, setNotes] = React.useState(props.notes);

  // transpose vale can be any number , positive or negative given that
  // the note is divided into 4 microtones
  const transposeNotes = (transpose: number) => {
    const transposedNotes: Note[] = [];
    notes.forEach((note) => {
      transposedNotes.push(transposeNote(note, transpose));
    });

    // set the notes state to the transposed notes
    setNotes(transposedNotes);
  };

  return (
    <>
      {/* Display the list of notes here */}
      {notes.map((note, i) => {
        return (
          <>
            {/* Create a note component that take transpose value here */}
            <NoteView key={i} note={note} />
          </>
        );
      })}

      {/* a button to transpose all the notes up */}
      <div>
        <Button variant="contained" onClick={() => transposeNotes(2)}>
          Transpose Up
        </Button>
        <Button variant="contained" onClick={() => transposeNotes(-2)}>
          Transpose Down
        </Button>
      </div>
    </>
  );
};

export default Solfege;
