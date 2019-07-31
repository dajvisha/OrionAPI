const actions = require('../actions');

// Returns a User given its id
const User = (_, args, context, info) => {
    return actions.getUserByUsername(args.username)
        .then((user) => {
            if (!user) throw new Error("User does not exist");
            return user;
        })
        .catch(e => e);
};

// Returns all Users 
const Users = (_, args, context, info) => {
    return actions.getUsers()
        .then(users => users)
        .catch(e => e); 
};

const Images = (_, args, context, info) => {
    return actions.getImages(args.user)
        .then(images => images)
        .catch(e => e);
}

const Comments = (_, args, context, info) => {
    return comments = actions.getComments(args.image)
        .then((comments) => {
            return comments.map((comment) => {
                return actions.getUserByUsername(comment.user).then((user)=>{
                    return {
                        _id: comment._id,
                        user_src: user.src,
                        image: comment.image,
                        user: comment.user,
                        body: comment.body
                      };
                })
            });
        })
        .catch(e => e);
}

module.exports = {
    User,
    Users,
    Images,
    Comments
};
