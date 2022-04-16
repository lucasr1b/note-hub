import { Router } from 'express';
import { getNotes, getNote, addNote, updateNote, deleteNote } from '../controllers/notes';

const router: Router = Router();

router.get('/api/notes', getNotes);
router.get('/api/notes/getNote', getNote);
router.post('/api/notes/add-note', addNote);
router.put('/api/notes/update-note/:id', updateNote);
router.delete('/api/notes/delete-note/:id', deleteNote);

export default router;