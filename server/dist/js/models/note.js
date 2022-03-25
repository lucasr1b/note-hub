"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)("Note", noteSchema);
