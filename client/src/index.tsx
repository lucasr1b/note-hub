import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Folder from './pages/Folder';
import Note from './pages/Note';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='notes/:folder' element={<Folder />} />
      <Route path='notes/:folderID/:noteID' element={<Note />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);