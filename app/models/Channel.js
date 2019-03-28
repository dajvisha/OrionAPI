const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines Channel Schema
const ChannelSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    description: {
        type: String,
    },
    channel_image_ulr: {
        type: String,
    },
    subscriptors_number: {
        type: Number,
    },
    videos_number: {
        type: Number,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    videos: [
        { type: Schema.Types.ObjectId, ref: 'videos' }
    ]
}, { "collection": "channels", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("channels", UserSchema);
