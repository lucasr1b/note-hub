import { Request, Response } from 'express';
import { IFolder } from '../types/folder';
import Folder from '../models/folder';
import note from '../models/note';


const getFolders = async (req: Request, res: Response): Promise<void> => {
    try {
        const folders: IFolder[] = await Folder.find();
        res.status(200).json({ folders });
    } catch (err) {
        console.log(err);
    }
}

const createFolder = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IFolder, 'name' | 'path'>

        const folder: IFolder = new Folder({
            name: body.name,
            path: body.path,
        })

        const newFolder: IFolder = await folder.save();
        const allFolders: IFolder[] = await Folder.find();

        res.status(201).send({
            message: 'Created new folder',
            folder: newFolder,
            folders: allFolders
        });

    } catch (err) {
        console.log(err);
    }
}

const updateFolder = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.body.id;
        const opened = req.body.opened;
        
        const updateFolder: IFolder | null = await Folder.findByIdAndUpdate(id, { opened: opened });

        console.log(id)

        res.status(200).json({
            message: 'Folder updated',
            updatedFolder: updateFolder,
        })
        console.log(req.body);
    } catch (error) {
        throw error;
    }
}

const deleteFolder = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteFolder: IFolder | null = await Folder.findByIdAndRemove(req.params.id);
        const allFolders: IFolder[] = await Folder.find();

        res.status(200).json({
            message: 'Deleted folder',
            folder: deleteFolder,
            folders: allFolders,
        })
    } catch (err) {
        console.log(err);
    }
}

export { getFolders, createFolder, updateFolder, deleteFolder };