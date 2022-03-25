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
exports.deleteFolder = exports.updateFolder = exports.addFolder = exports.getFolders = void 0;
const folder_1 = __importDefault(require("../../models/folder"));
const note_1 = __importDefault(require("../../models/note"));
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
const addFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const folder = new folder_1.default({
            name: body.name,
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
exports.addFolder = addFolder;
const updateFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        const updateFolder = yield note_1.default.findByIdAndUpdate({ _id: id }, body);
        const allFolders = yield folder_1.default.find();
        res.status(200).json({
            message: 'Updated folder',
            folder: updateFolder,
            folders: allFolders,
        });
    }
    catch (err) {
        console.log(err);
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
