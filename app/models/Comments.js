const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines Comment Schema
const CommentSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        default: '',
    },
}, { "collection": "comments", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("comments", CommentSchema);
