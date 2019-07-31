const Image = require('../models/Images');

// Returns an user given its username
const getImageById = (id) => {
    let image = Image.findById(id);
    return image;
};

// Updates an user given its id
const updateImageById = (id, data) => {
    let updatedImage = Image.findByIdAndUpdate(id,
        { $set: data },
        { new: true });

    return updatedImage;
};

// Creates a new image
const saveImage = (data) => {
    return Image.create(data);
};

// Returns images by user
const getImages = (user) => {
    let images = Image.find({
        user: user,
    });

    return images;
};

module.exports = {
    getImageById,
    updateImageById,
    saveImage,
    getImages
};
