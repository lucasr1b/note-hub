import React, { useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import './Note.scss';
import MarkdownIt from 'markdown-it';

const Notes = () => {
    const { folder, note } = useParams();

    const [markdownText, setMarkDownText] = useState("");

    const [readModeContent, setReadModeContent] = useState("");

    const [readModeToggled, setReadModeToggled] = useState(false);

    const handleTextInput = (e: any) => {

        let md = new MarkdownIt();

        const renderedHTML = md.render(e.target.value);

        setReadModeContent(renderedHTML);

        setMarkDownText(e.target.value);

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

            content.value = markdownText;

            noteArea.append(content);
        }


    }

    return (
        <div className='Note'>
            <Sidebar />
            <div className='Container'>
                <header>
                    <div className='Note--Details'><span className='Note--Icon'>📄</span><span className='Note--Name'>My First Note</span><button onClick={renderViewMode}>Read</button></div>
                    <div className='Divider'></div>
                </header>
                <main>
                    {/* <h1>My First Note</h1>
                    <p>Hello World</p>
                    <br></br>
                    <p>This is my first note</p>
                    <br></br>
                    <div className='Todo'><input type='checkbox' />Make</div>
                    <div className='Todo'><input type='checkbox' />This</div>
                    <div className='Todo'><input type='checkbox' />Work</div> */}

                    <div id='Note--Area'>
                        <textarea onChange={handleTextInput}>
                            Start typing here...
                        </textarea>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Notes