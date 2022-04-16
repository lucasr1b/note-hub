import { Request, Response } from 'express';
import { INote } from "../types/note";
import Note from '../models/note';

const getNotes = async (req: Request, res: Response): Promise<void> => {
    try {
        const folderPath = req.query.folder;
        
        const notes: INote[] = folderPath === '' ? await Note.find() : await Note.find( {folder: folderPath});
        res.status(200).json({ notes });
        console.log(req.query);
    } catch (error) {
        throw error;
    }
}

const getNote = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.query.id;

        const note: INote[] = await Note.find({ _id: id });
        res.status(200).json({ note });

    } catch (err) {
        throw err;
    }
}

const addNote = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<INote, 'title' | 'content' | 'folder' | 'path'>

        const folder = body.folder === '' ? 'my-notes' : body.folder;

        const note: INote = new Note({
            title: body.title,
            content: body.content,
            folder: folder,
            path: body.path,
        })

        const newNote: INote = await note.save();
        const allNotes: INote[] = await Note.find();

        res.status(201).json({
            message: 'Note added',
            note: newNote,
            notes: allNotes
        });
    } catch (error) {
        throw error
    }
}

const updateNote = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body, } = req
        const updateNote: INote | null = await Note.findByIdAndUpdate({ _id: id }, body);
        const allNotes: INote[] = await Note.find()

        res.status(200).json({
            message: 'Note updated',
            note: updateNote,
            notes: allNotes,
        })
    } catch (error) {
        throw error;
    }
}

const deleteNote = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedNote: INote | null = await Note.findByIdAndRemove(req.params.id);
        const allNotes: INote[] = await Note.find();

        res.status(200).json({
            message: 'Note deleted',
            note: deletedNote,
            notes: allNotes,
        })
    } catch (error) {
        throw error;
    }
}

export { getNotes, getNote, addNote, updateNote, deleteNote };