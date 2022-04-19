import React, { useState, useEffect } from 'react'
import './Sidebar.scss'
import SidebarIcon from './SidebarIcon';
import SidebarExpand from './SidebarExpand';
import { FaSearch, FaTerminal, FaCog } from 'react-icons/fa';
import FolderItem from './SidebarFolderItem';
import { getFolders } from '../../API/FolderAPI';

const Sidebar = () => {
    const [folders, setFolders] = useState<IFolder[]>([]);

    useEffect(() => {
        fetchFolders();
    }, []);

    const fetchFolders = (): void => {
        getFolders()
            .then(({ data: { folders } }: IFolder[] | any) => setFolders(folders))
            .catch((err: Error) => console.log(err));
    }

    return (
        <nav className='Sidebar'>
            <div className='Item Account'>
                <img src="https://avatars.githubusercontent.com/u/38605132?v=4" width='18' height='18' alt='Profile' /><span>Lucas's Notes</span>
            </div>
            <div className='Options'>
                <div className='Item'><FaSearch /> Search</div>
                <div className='Item'><FaTerminal /> Commands</div>
                <div className='Item'><FaCog /> Settings</div>
            </div>
            <div className='Directory'>
                {/* {folders?.map((folder: IFolder) => (
                    <FolderItem key={folder._id} folder={folder} />
                ))} */}
                <div className='Folder--Block'>
                    <div className='Folder'><SidebarExpand /><SidebarIcon icon='📄' />My Notes</div>
                    <div className='File Active Unopened'><SidebarIcon icon='📄' />My First Note</div>
                    <div className='File Unopened'><SidebarIcon icon='📄' />My Second Note</div>
                </div>
            </div>
            <div className='Footer'>
                <span>Note Hub v1.0</span>
            </div>
        </nav>
    )
}

export default Sidebar