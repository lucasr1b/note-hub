import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';

const Notes = () => {
    const { folder, note } = useParams();

    return (
        <div>
            <Sidebar />
            <span>Inside: <strong>{folder}</strong></span>
            <br></br>
            <span>Note path: <strong>{note}</strong></span>
        </div>
    )
}

export default Notes