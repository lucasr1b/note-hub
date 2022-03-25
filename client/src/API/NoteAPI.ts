import axios, { AxiosResponse } from 'axios';
import Folder from '../pages/Folder';
import { createPath } from './APIUtils';

const baseUrl: string = 'http://localhost:4000';

export const getNotes = async (folder: any): Promise<AxiosResponse<NoteDataType>> => {
    try {

        console.log(folder);

        const notes: AxiosResponse<NoteDataType> = await axios.get(`${baseUrl}/api/notes`, { params: { folder: folder} });

        return notes;
        
    } catch (error) {
        throw error;
    }
}

export const addNote = async (formData: INote): Promise<AxiosResponse<NoteDataType>> => {
    try {

        const path = createPath(formData.title);

        const note: Omit<INote, '_id'> = {
            title: formData.title,
            content: formData.content,
            folder: 'coolness',
            path: path,
        };

        const saveNote: AxiosResponse<NoteDataType> = await axios.post(`${baseUrl}/api/notes/add-note`, note);
        return saveNote;

    } catch (error) {
        throw error;
    }
}

export const updateNote = async (note: INote): Promise<AxiosResponse<NoteDataType>> => {
    try {

        const noteUpdate: Pick<INote, 'content'> = {
            content: 'Updated content placeholder',
        };

        const updatedNote: AxiosResponse<NoteDataType> = await axios.put(`${baseUrl}/api/notes/edit-note/${note._id}`, noteUpdate);
        return updatedNote;

    } catch (error) {
        throw error;
    }
}

export const deleteNote = async (_id: string): Promise<AxiosResponse<NoteDataType>> => {
    try {

        const deletedNote: AxiosResponse<NoteDataType> = await axios.delete(`${baseUrl}/api/notes/delete-note/${_id}`)
        return deletedNote;

    } catch (error) {
        throw error;
    }
}