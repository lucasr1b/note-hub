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
exports.deleteFolder = exports.updateFolder = exports.createFolder = exports.getFolders = void 0;
const folder_1 = __importDefault(require("../models/folder"));
const getFolders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const folders = yield folder_1.default.find();
        res.status(200).json({ folders });
    }
    catch (err) {
        console.log(err);
    }
});
exports.getFolders = getFolders;
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const folder = new folder_1.default({
            name: body.name,
            path: body.path,
        });
        const newFolder = yield folder.save();
        const allFolders = yield folder_1.default.find();
        res.status(201).send({
            message: 'Created new folder',
            folder: newFolder,
            folders: allFolders
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createFolder = createFolder;
const updateFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const opened = req.body.opened;
        const updateFolder = yield folder_1.default.findByIdAndUpdate(id, { opened: opened });
        console.log(id);
        res.status(200).json({
            message: 'Folder updated',
            updatedFolder: updateFolder,
        });
        console.log(req.body);
    }
    catch (error) {
        throw error;
    }
});
exports.updateFolder = updateFolder;
const deleteFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteFolder = yield folder_1.default.findByIdAndRemove(req.params.id);
        const allFolders = yield folder_1.default.find();
        res.status(200).json({
            message: 'Deleted folder',
            folder: deleteFolder,
            folders: allFolders,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteFolder = deleteFolder;
