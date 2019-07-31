const actions = require('../actions');
const { storeUpload } = require("../utils");

const signup = (_, args, context, info) => {
    return actions.signUp(args.data)
        .then(token => {
            return {
                "message": "User created successfully",
                token: token
            };
        })
        .catch(e => e);
};

const saveimage = (_, args, context, info) => {
    return actions.saveImage(args.data)
        .then(image => image)
        .catch(e => e);
};

const addcomment = (_, args, context, info) => {
    return actions.addComment(args.data)
        .then(comment => {
            return actions.getUserByUsername(comment.user).then((user) => {
                return {
                    _id: comment._id,
                    body: comment.body,
                    image: comment.image,
                    user: comment.user,
                    user_src: user.src,
                }
            })
        })
        .catch(e => e);
};

const singleUpload = async (_, args, context, info) => {
	const { createReadStream } = await args.data.image;
	const stream = createReadStream();
    const { url } = await storeUpload(stream);

    const imgData = {
        user: args.data.user,
        src: url
    };

    return actions.saveImage(imgData).then(image => image).catch(e => e);
};

module.exports = {
    signup,
    saveimage,
    addcomment,
    singleUpload
};
