import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getNotes, addNote, updateNote, deleteNote } from '../API/notes';
import NoteItem from '../components/notes/NoteItem';

const Folder: React.FC = () => {
  const { folder } = useParams();
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    getNotes(folder)
      .then(({ data: { notes } }: INote[] | any) => setNotes(notes))
      .catch((err: Error) => console.log(err));
  }

  const handleUpdateNote = (note: INote): void => {
    updateNote(note)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Note could not be updated.');
        }
        setNotes(data.notes);
      }).catch(err => console.log(err));
  }

  const handleSaveNote = (e: React.FormEvent, formData: INote): void => {
    e.preventDefault();

    addNote(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Note was not saved.');
        }
        setNotes(data.notes);
        fetchNotes();
      }).catch(err => console.log(err));
  }

  const handleDeleteNote = (_id: string): void => {
    deleteNote(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Note could not be deleted');
        }
        setNotes(data.notes);
      }).catch(err => console.log(err));
  }

  return (
    <div>
      <div>Folder name: <strong>{folder}</strong></div>
      {notes?.map((note: INote) => (
        <NoteItem key={note._id} updateNote={handleUpdateNote} deleteNote={handleDeleteNote} note={note} />
      ))}
    </div>

  )
}

export default Folder;