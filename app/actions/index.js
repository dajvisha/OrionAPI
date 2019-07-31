const authActions = require('./authActions')
const userActions = require('./userActions');
const imageActions = require('./imageActions');
const commentActions = require('./commentActions');

module.exports = {
	...authActions,
	...userActions,
	...imageActions,
	...commentActions,
};
