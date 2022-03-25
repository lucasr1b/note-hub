import axios, { AxiosResponse } from 'axios';
import path from 'path';
import { createPath } from './APIUtils';

const baseUrl: string = 'http://localhost:4000';

export const getFolders = async (): Promise<AxiosResponse<FolderDataType>> => {
    try {
        const folders: AxiosResponse<FolderDataType> = await axios.get(`${baseUrl}/api/folders`);
        return folders;

    } catch (err) {
        throw err;
    }
}

export const createFolder = async (formData: IFolder): Promise<AxiosResponse<FolderDataType>> => {
    try {
        const path = createPath(formData.name);

        const folder: Omit<IFolder, '_id'> = {
            name: formData.name,
            path: path,
        }

        const saveFolder: AxiosResponse<FolderDataType> = await axios.post(`${baseUrl}/api/folders/create-folder`, folder)
        return saveFolder;

    } catch (err) {
        throw err;
    }
}

export const updateFolder = async (folder: IFolder): Promise<AxiosResponse<FolderDataType>> => {
    try {
        const folderUpdate: Pick<IFolder, 'name'> = {
            name: 'Updated folder name',
        };

        const updatedFolder: AxiosResponse<FolderDataType> = await axios.put(`${baseUrl}/api/folders/update-folder`, folderUpdate)
        return updatedFolder;

    } catch (err) {
        throw err;
    }
}

export const deleteFolder = async (_id: string): Promise<AxiosResponse<FolderDataType>> => {
    try {
        const deletedFolder: AxiosResponse<FolderDataType> = await axios.delete(`${baseUrl}/api/folders/delete-folder`)
        return deletedFolder;

    } catch (error) {
        throw error;
    }
}