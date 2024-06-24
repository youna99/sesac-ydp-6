const { getDbUser } = require('../model/user');

exports.getUser = (req, res) => {
    res.render('user', {user: getDbUser()})
};