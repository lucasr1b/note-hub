import { Document } from 'mongoose';

export interface IFolder extends Document {
    name: string;
    opened: string;
    path: string;
}