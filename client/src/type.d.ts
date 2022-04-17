interface INote {
    _id: string;
    title?: string;
    content?: string;
    folder?: string;
    path?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface NoteProps {
    note: INote;
}

type NoteDataType = {
    _id: string;
    title: string;
    message: string;
    status: string;
    notes: INote[];
    note?: INote;
    folder?: IFolder;
}

interface IFolder {
    _id: string;
    name: string;
    path: string;
    createdAt?: string;
    updatedAt?: string;
}

interface FolderProps {
    folder: IFolder;
}

type FolderDataType = {
    message: string;
    status: string;
    folders: IFolder[];
    folder?: IFolder;
}