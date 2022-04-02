import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import './Note.scss';

const Notes = () => {
    const { folder, note } = useParams();

    return (
        <div className='Note'>
            <Sidebar />
            <div className='Container'>
                <header>
                    <div className='Note--Details'><span className='Note--Icon'>📄</span><span className='Note--Name'>My First Note</span></div>
                    <div className='Divider'></div>
                </header>
                <main contentEditable='true'>
                    <h1>My First Note</h1>
                    <p>Hello World</p>
                    <br></br>
                    <p>This is my first note</p>
                    <br></br>
                    <div className='Todo'><input type='checkbox' />Make</div>
                    <div className='Todo'><input type='checkbox' />This</div>
                    <div className='Todo'><input type='checkbox' />Work</div>
                </main>
            </div>
        </div>
    )
}

export default Notes