const actions = require('../actions');

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

module.exports = {
    signup,
};
