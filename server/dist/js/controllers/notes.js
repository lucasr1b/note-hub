"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.addNote = exports.getNote = exports.getNotes = void 0;
const note_1 = __importDefault(require("../models/note"));
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const folderPath = req.query.folder;
        const notes = folderPath === '' ? yield note_1.default.find() : yield note_1.default.find({ folder: folderPath });
        res.status(200).json({ notes });
        console.log(req.query);
    }
    catch (error) {
        throw error;
    }
});
exports.getNotes = getNotes;
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const note = yield note_1.default.find({ _id: id });
        res.status(200).json({ note });
    }
    catch (err) {
        throw err;
    }
});
exports.getNote = getNote;
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const folder = body.folder === '' ? 'my-notes' : body.folder;
        const note = new note_1.default({
            title: body.title,
            content: body.content,
            folder: folder,
            path: body.path,
        });
        const newNote = yield note.save();
        const allNotes = yield note_1.default.find();
        res.status(201).json({
            message: 'Note added',
            note: newNote,
            notes: allNotes
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addNote = addNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateNote = yield note_1.default.findByIdAndUpdate({ _id: id }, body);
        const allNotes = yield note_1.default.find();
        res.status(200).json({
            message: 'Note updated',
            note: updateNote,
            notes: allNotes,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedNote = yield note_1.default.findByIdAndRemove(req.params.id);
        const allNotes = yield note_1.default.find();
        res.status(200).json({
            message: 'Note deleted',
            note: deletedNote,
            notes: allNotes,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteNote = deleteNote;
