import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Folder from './pages/Folder';
import Note from './pages/Note';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='notes/:folder' element={<Folder />} />
      <Route path='notes/:folder/:note' element={<Note />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);