import { Router } from 'express';
import { getNotes, getNote, addNote, updateNote, deleteNote } from '../controllers/notes';

const router: Router = Router();

router.get('/api/notes', getNotes);
router.get('/api/notes/getNote', getNote); // /:id
router.post('/api/notes/add-note', addNote); // /:id
router.put('/api/notes/update-note', updateNote); // /:id
router.delete('/api/notes/delete-note/:id', deleteNote);

export default router;