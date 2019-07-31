const User = require('../models/Users');

// Creates a new user
const createUser = (data) => {
    return User.create(data);
};

// Updates an user given its id
const updateUserById = (id, data) => {
    let updatedUser = User.findByIdAndUpdate(id,
        { $set: data },
        { new: true });

    updatedUser = updatedUser.select('-password');

    return updatedUser;
};

// Deletes an user given its id
const deleteUserById = (id) => {
    let deletedUser = User.findByIdAndUpdate(id,
        { $set: { is_active: false } },
        { new: true });

    deletedUser = deletedUser.select('-password');

    return deletedUser;
};

// Returns an user given its username
const getUserByUsername = (username) => {
    let user = User.findOne({
        username: username,
        is_active: true,
    });

    user = user.select('-password');

    return user;
};

// Returns an user given its email 
const getUserByEmail = (email) => {
    let user = User.findOne({
        email: email,
    });

    user = user.select('-password');

    return user;
};

// Returns all users 
const getUsers = () => {
    let users = User.find({
        is_active: true,
    });

    users = users.select('-password');

    return users;
};

module.exports = {
    createUser, 
    updateUserById,
    deleteUserById,
    getUserByUsername,
    getUserByEmail,
    getUsers,
};
