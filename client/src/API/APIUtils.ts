import axios, { AxiosResponse } from "axios";

const baseUrl: string = 'http://localhost:4000';

export const createPath = (name: string) => {
    let path = name.toLowerCase().replaceAll(' ', '-');

    path = (path.length > 24 ? path.substring(0, 23) : path);

    return (path.substring(path.length - 1) === '-' ? path.slice(0, -1) : path);
}

export const getTitleFromPath = async (folder: string, path: string): Promise<AxiosResponse<NoteDataType>> => {
    try {
        const note: AxiosResponse<NoteDataType> = await axios.get(`${baseUrl}/api/notes`, { params: { folder: folder, path: path } });
        return note;
    } catch (err) {
        throw (err);
    }

}