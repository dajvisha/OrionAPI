const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines Image Schema
const ImageSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    likes_total: {
        type: Number,
        default: 0,
    },
    comments_total: {
        type: Number,
        default: 0,
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { "collection": "images", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("images", ImageSchema);
