import { Router } from 'express';
import { getFolders, createFolder, updateFolder, deleteFolder } from '../controllers/folders';

const router: Router = Router();

router.get('/api/folders', getFolders);
router.post('/api/folders/create-folder', createFolder);
router.put('/api/folders/update-folder/:id', updateFolder);
router.delete('/api/folders/delete-folder/:id', deleteFolder);

export default router;