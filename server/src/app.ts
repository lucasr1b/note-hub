import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/notes';
import folderRoutes from './routes/folders';

require('dotenv').config();

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(noteRoutes);
app.use(folderRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@note-hub.ejjcs.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(uri).then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })

