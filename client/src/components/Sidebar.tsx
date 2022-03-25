import React from 'react'

const Sidebar = () => {
    return (
        <nav className='Sidebar'>
            <div className='Item Account'>
                <span>Lucas's Notes</span>
            </div>
            <div className='Options'>
                <div className='Item'>Search</div>
                <div className='Item'>Commands</div>
                <div className='Item'>Settings</div>
            </div>
            <div className='Directory'>
                <div className='Item Active'>My Notes</div>
                <div className='Item'>School</div>
                <div className='Item'>Projects</div>
                <div className='Item'>Books</div>
            </div>
        </nav>
    )
}

export default Sidebar