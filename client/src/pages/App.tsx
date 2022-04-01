import React from 'react'
import './App.scss';
import Sidebar from '../components/sidebar/Sidebar';

const App = () => {
    return (
        <div className='App'>
            <Sidebar />
            <main>
                <h1>Hello World</h1>
            </main>
        </div>
    )
}

export default App