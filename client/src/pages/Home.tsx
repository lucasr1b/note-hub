import React, { useEffect, useState } from 'react';
import { createFolder, deleteFolder, getFolders, updateFolder } from '../API/FolderAPI';
import { addNote, deleteNote, getNotes, updateNote } from '../API/NoteAPI';
import CreateFolder from '../components/folders/CreateFolder';
import FolderItem from '../components/sidebar/SidebarFolderItem';
import AddNote from '../components/notes/AddNote';
import NoteItem from '../components/notes/NoteItem';

const App: React.FC = () => {
  const [folders, setFolders] = useState<IFolder[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    fetchFolders();
    fetchNotes();
  }, []);

  const fetchFolders = (): void => {
    getFolders()
      .then(({ data: { folders } }: IFolder[] | any) => setFolders(folders))
      .catch((err: Error) => console.log(err));
  }

  const handleSaveFolder = (e: React.FormEvent, formData: IFolder): void => {
    e.preventDefault();

    createFolder(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Folder was not saved.');
        }
        setFolders(data.folders);
        fetchFolders();
      }).catch(err => console.log(err));
  }

  const handleUpdateFolder = (folder: IFolder): void => {
    updateFolder(folder)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Folder could not be updated.');
        }
        setFolders(data.folders);
      }).catch(err => console.log(err));
  }

  const handleDeleteFolder = (_id: string): void => {
    deleteFolder(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Folder could not be deleted');
        }
        setFolders(data.folders);
      }).catch(err => console.log(err));
  }

  // Notes
  const fetchNotes = (): void => {
    getNotes('')
      .then(({ data: { notes } }: INote[] | any) => setNotes(notes))
      .catch((err: Error) => console.log(err));
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

  const handleUpdateNote = (note: INote): void => {
    // updateNote(note)
    //   .then(({ status, data }) => {
    //     if (status !== 200) {
    //       throw new Error('Error! Note could not be updated.');
    //     }
    //     setNotes(data.notes);
    //   }).catch(err => console.log(err));
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
    <main className='App'>
      <h1>Notes</h1>
      <h3>Folders</h3>
      {folders?.map((folder: IFolder) => (
        <FolderItem key={folder._id} folder={folder} />
      ))}
      <CreateFolder saveFolder={handleSaveFolder} />
      <br></br>
      <h3>Notes</h3>
      {notes?.map((note: INote) => (
        <NoteItem key={note._id} updateNote={handleUpdateNote} deleteNote={handleDeleteNote} note={note} />
      ))}
      <AddNote saveNote={handleSaveNote} />
    </main>
  )
}

export default App;