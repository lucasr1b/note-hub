import React from 'react'
import './Sidebar.scss'
import SidebarIcon from './SidebarIcon';
import { FaSearch, FaTerminal, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <nav className='Sidebar'>
            <div className='Item Account'>
                <img src="https://avatars.githubusercontent.com/u/38605132?v=4"/><span>Lucas's Notes</span>
            </div>
            <div className='Options'>
                <div className='Item'><FaSearch /> Search</div>
                <div className='Item'><FaTerminal /> Commands</div>
                <div className='Item'><FaCog /> Settings</div>
            </div>
            <div className='Directory'>
                <div className='Item Active'><SidebarIcon icon='📄' />My Notes</div>
                <div className='Item'><SidebarIcon icon='📚' />School</div>
                <div className='Item'><SidebarIcon icon='📒' />Projects</div>
                <div className='Item'><SidebarIcon icon='📕' />Books</div>
            </div>
        </nav>
    )
}

export default Sidebar