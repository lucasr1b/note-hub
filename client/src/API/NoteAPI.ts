import axios, { AxiosResponse } from 'axios';
import Folder from '../pages/Folder';
import { createPath } from './APIUtils';

const baseUrl: string = 'http://localhost:4000';

export const getNotes = async (folder: any): Promise<AxiosResponse<NoteDataType>> => {
    try {

        console.log(folder);

        const notes: AxiosResponse<NoteDataType> = await axios.get(`${baseUrl}/api/notes`, { params: { folder: folder } });

        return notes;

    } catch (error) {
        throw error;
    }
}

export const getNote = async (id: any): Promise<AxiosResponse<NoteDataType>> => {
    try {

        const note: AxiosResponse<NoteDataType> = await axios.get(`${baseUrl}/api/notes/getNote`, { params: { id: id } });

        return note;
    } catch (err) {
        throw err;
    }
}

export const addNote = async (formData: any): Promise<AxiosResponse<NoteDataType>> => {
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

export const updateNote = async (id: any, content: string): Promise<AxiosResponse<NoteDataType>> => {
    try {

        const updatedNote: AxiosResponse<NoteDataType> = await axios.put(`${baseUrl}/api/notes/update-note`, { id: id, content: content });
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