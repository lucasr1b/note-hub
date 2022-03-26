import React from 'react'
import { Link } from 'react-router-dom';
import SidebarExpand from './SidebarExpand';
import SidebarIcon from './SidebarIcon';

const FolderItem: React.FC<FolderProps> = ({ folder }) => {
  return (
    <div className='Item'><SidebarExpand /><SidebarIcon icon='📄' />{folder.name}</div>
  )
}

export default FolderItem