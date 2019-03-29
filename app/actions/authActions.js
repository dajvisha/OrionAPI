// Import Json Web Token and bcrypt 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Import Auth configuration 
const { SECRET_KEY } = require('../config');

// Import User actions
const { createUser, getUserByEmail } = require('./userActions');

// Extends Date with addDays property
Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);

    return date;
};

// Creates a token using JWT
const createToken = ({ _id, email, first_name }) => {
    const validUntil = new Date().addDays(1).getTime();

    const payload = {
        _id,
        email,
        first_name,
        validUntil
    };

    return jwt.sign(payload, SECRET_KEY);
};

// SignUp a new User
const signUp = (userData) => {
    return new Promise((resolve, reject) => {
        createUser(userData)
            .then((user) => {
                const token = createToken(user);
                resolve(token);
            })
            .catch(reject);
    });
};

// LogIn a User
const logIn = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        getUserByEmail(email)
            .then((user) => {
                bcrypt.compare(password, user.password, (err, isValid) => {
                    if (err) reject(err);
                    if (isValid) resolve(createToken(user));
                    reject(new Error('Password does not match'));
                });
            })
            .catch(reject);
    });
};

module.exports = {
    signUp,
    logIn,
};
