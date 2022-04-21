import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getNotes } from '../../API/NoteAPI';
import SidebarExpand from './SidebarExpand';
import SidebarIcon from './SidebarIcon';

const FolderItem: React.FC<FolderProps> = ({ folder }) => {

  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    fetchNotes();
  }, [])

  const fetchNotes = (): void => {
    getNotes(folder.path)
      .then(({ data: { notes } }: INote[] | any) => setNotes(notes))
      .catch((err: Error) => console.log(err));
  }

  return (
    <div className='Folder--Block'>
      <div className='Folder'><SidebarExpand folder={folder}/><SidebarIcon icon='📄' />{folder.name}</div>
      {notes?.map((note: INote) => (
        <NavLink className={({ isActive }) => 'File ' + (isActive ? 'Active' : folder.opened == 'true' ? '' : 'Unopened')} key={note._id} to={`/notes/${folder._id}/${note._id}`}><SidebarIcon icon='📄' />{note.title}</NavLink>
      ))}
    </div>
  )
}

export default FolderItem