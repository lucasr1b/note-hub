import { IFolder } from '../types/folder';
import { model, Schema } from 'mongoose';

const folderSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        opened: {
            type: String,
            required: false,
        },

        path: {
            type: String,
            required: true,
        }
    }
)

export default model<IFolder>('Folder', folderSchema);