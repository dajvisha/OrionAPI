const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines Channel Schema
const VideoSchema = new Schema({
    channel: {
        type: Schema.Types.ObjectId, ref: 'channels'
    },
    video_name: {
        type: String,
        required: true,
    },
    video_description: {
        type: String,
        required: true, 
    },
    video_ulr: {
        type: String,
    },
    views_number: {
        type: Number,
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { "collection": "channels", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("videos", VideoSchema);
