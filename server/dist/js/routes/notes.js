"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_1 = require("../controllers/notes");
const router = (0, express_1.Router)();
router.get('/api/notes', notes_1.getNotes);
router.get('/api/notes/getNote', notes_1.getNote); // /:id
router.post('/api/notes/add-note', notes_1.addNote); // /:id
router.put('/api/notes/update-note', notes_1.updateNote); // /:id
router.delete('/api/notes/delete-note/:id', notes_1.deleteNote);
exports.default = router;
