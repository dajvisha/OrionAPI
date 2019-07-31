const Comment = require('../models/Comments');
const { updateImageById, getImageById } = require('./imageActions');

const addComment = (data) => {
  return getImageById(data.image).then((image) => {
    return updateImageById(data.image, {
      comments_total: image.comments_total + 1
    }).then((_) => {
      return Comment.create(data);
    });
  });
};

const getComments = (image) => {
  let comments = Comment.find({
      image: image,
  });

  return comments;
};

module.exports = {
    addComment,
    getComments
};
