import React from 'react';

type Props = NoteProps & {
    updateNote: (note: INote) => void;
    deleteNote: (_id: string) => void;
}

const NoteItem: React.FC<Props> = ({ note, updateNote, deleteNote }) => {
  return (
    <div className='Card'>
        <div className='Card--text'>
            <h4>{note.title}</h4>
            <span>{note.content}</span>
        </div>
        <div className='Card--button'>
            <button onClick={() => deleteNote(note._id)} className='Card--button__delete'>Delete</button>
        </div>
    </div>
  )
}

export default NoteItem;