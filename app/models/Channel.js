const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines Channel Schema
const ChannelSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    channel_name: {
        type: String,
        unique: true,
        required: true, 
    },
    channel_description: {
        type: String,
        required: true,
    },
    channel_image_ulr: {
        type: String,
    },
    subscriptors_number: {
        type: Number,
    },
    videos: [
        { type: Schema.Types.ObjectId, ref: 'videos' }
    ],
    is_active: {
        type: Boolean,
        default: true
    },
}, { "collection": "channels", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("channels", UserSchema);
