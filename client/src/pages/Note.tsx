import React from 'react';
import { useParams } from 'react-router';

const Notes = () => {
    const { folder, note } = useParams();

    return (
        <div>
            <span>Inside: <strong>{folder}</strong></span>
            <br></br>
            <span>Note path: <strong>{note}</strong></span>
            </div>
    )
}

export default Notes