import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import './Note.scss';
import MarkdownIt from 'markdown-it';
import { getNote, updateNote } from '../API/NoteAPI';

const md = require('markdown-it')({
    typographer: true,
})

const Notes = () => {
    const { folderID, noteID } = useParams();

    const [noteTitle, setNoteTitle] = useState("");

    const [markdownContent, setMarkdownContent] = useState("");

    const [readModeContent, setReadModeContent] = useState("");

    const [readModeToggled, setReadModeToggled] = useState(false);

    useEffect(() => {

        getNote(noteID?.toString())
            .then(({ data: { note } }: INote[] | any) => handleNoteInfo(note[0]))

    }, [noteID])

    const handleNoteInfo = (note: any) => {
        setNoteTitle(note.title);
        setMarkdownContent(note.content);

        setReadModeContent(md.render(note.content));
    }

    const handleTextInput = (e: any) => {

        const renderedHTML = md.render(e.target.value);

        setReadModeContent(renderedHTML);

        updateNote(noteID, e.target.value); // Make this only be called every 1-3 seconds.

        setMarkdownContent(e.target.value);
    }

    const renderViewMode = () => {

        setReadModeToggled(!readModeToggled);

        const noteArea = document.getElementById('Note--Area')!;

        if (!readModeToggled) {

            noteArea.firstChild?.remove();

            const content = document.createElement('div');

            content.innerHTML = readModeContent;

            noteArea.append(content);
        } else {
            noteArea.firstChild?.remove();
            const content = document.createElement('textarea')!;

            content.classList.add('Note--Area');

            content.addEventListener('change', (e) => {
                handleTextInput(e);
            })

            content.value = markdownContent;

            noteArea.append(content);
        }


    }

    return (
        <div className='Note'>
            <Sidebar />
            <div className='Container'>
                <header>
                    <div className='Note--Details'><span className='Note--Icon'>📄</span><span id='Note--Title'>{noteTitle}</span><button onClick={renderViewMode}>Read</button></div>
                    <div className='Divider'></div>
                </header>
                <main>

                    <div id='Note--Area'>
                        <textarea onChange={handleTextInput} value={markdownContent}>
                        </textarea>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Notes