import React from 'react'
import { Link } from 'react-router-dom';

type Props = FolderProps & {
  updateFolder: (folder: IFolder) => void;
  deleteFolder: (_id: string) => void;
}

const FolderItem: React.FC<Props> = ({ folder }) => {
  return (
    <div className='Card'>
      <div className='Card--text'>
        <Link to={`notes/${folder.path}`}key={folder._id}>{folder.name}</Link>
      </div>
    </div>
  )
}

export default FolderItem