import { Router } from 'express';
import { getNotes, addNote, updateNote, deleteNote } from '../controllers/notes';

const router: Router = Router();

router.get('/api/notes', getNotes);
router.post('/api/notes/add-note', addNote);
router.put('/api/notes/update-note/:id', updateNote);
router.delete('/api/notes/delete-note/:id', deleteNote);

export default router;