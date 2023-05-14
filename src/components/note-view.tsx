// Note component
// this component will take a note and transpose value
// the note should be displayed in a div
// the octave number should be displayed in a smaller font size
// the note should be displayed in a larger font size
// the note should be displayed in a different color if it is sharp or flat

import { useTranslation } from 'react-i18next';
import { Note, NoteAccidental, NoteLetter } from '../types';
import { CssBaseline } from '@mui/material';
import * as React from 'react';

// the note should be displayed in a different color if it is natural
interface NoteViewProps {
  note: Note;
}

export const NoteView = (props: NoteViewProps) => {
  const { t } = useTranslation();
  // create a function to transpose the note
  // this function should take a note and transpose value
  // this function should return a note , modifier and octave
  // this function should handle the edge cases of the note being sharp or flat
  // and should handle also microtonal notes

  return (
    <>
      <CssBaseline />
      <div>
        {/* Display the note here */}
        <span>{t(`notes.${NoteLetter[props.note.letter]}`)}</span>
        {/* Display the note modifier here */}
        <span>{NoteAccidental[props.note?.accidental || NoteAccidental.Natural]}</span>
        {/* Display the octave here */}
        <span>{props.note.octave}</span>
      </div>
    </>
  );
};
