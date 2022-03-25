import { INote } from '../types/note';
import { model, Schema } from 'mongoose';

const noteSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        folder: {
            type: String,
            required: true,
        },

        path: {
            type: String,
            required: true,
        },
    }
)

export default model<INote>("Note", noteSchema);