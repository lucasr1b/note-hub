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
        const { params: { id }, body } = req;

        const updateFolder: IFolder | null = await note.findByIdAndUpdate({ _id: id }, body);
        const allFolders: IFolder[] = await Folder.find();

        res.status(200).json({
            message: 'Updated folder',
            folder: updateFolder,
            folders: allFolders,
        })
    } catch (err) {
        console.log(err);
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