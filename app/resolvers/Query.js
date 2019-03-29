const actions = require('../actions');

// Returns a User given its id
const User = (_, args, context, info) => {
    return actions.getUserById(args.id)
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

module.exports = {
    User,
    Users,
};
