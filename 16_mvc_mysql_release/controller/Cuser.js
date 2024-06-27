// TODO: 컨트롤러 코드

const User = require('../model/User');

// (1) GET / => localhost:PORT/user
exports.main = (req, res) => {
    res.render('index');
};

// (2) GET /signup => localhost:PORT/user/singup
exports.getSignup = (req, res) => {
    res.render('signup')
}

// (3) POST /signup => localhost:PORT/user/singup
exports.postSignup = (req, res) => {
    console.log(req.body);

    User.postSignup(req.body, (result) => {
        console.log('controller/Cuser.js >>', result);
        res.send({
            userid: req.body.userid,
            pw: req.body.pw,
            name: req.body.name
        });
    });
};

// (4) GET /signin => localhost:PORT/user/singin
exports.getSignin = (req, res) => {
    res.render('signin');
};

// (5) POST /signin => localhost:PORT/user/singin
exports.postSignin = (req, res) => {
    console.log(req.body); // { userid: 'hello', pw: '1234' }


    User.postSignin(req.body, (result) => {
        console.log('controller/Cuser.js >>', result); // [RowDataPacket { userid: 'hello', pw: '1234' }]
        res.send(result)
    });
};

// (6) POST /profile => localhost:PORT/user/profile
exports.postProfile = (req, res) => {
    console.log(req.body); // { userid: 'hello'}

    User.postProfile(req.body, (result) => {
        console.log('controller/Cuser.js >>', result); // [RowDataPacket { id: 16, userid: 'hello', name: 'hello', pw: '1234' }]
        res.render('profile', { user: result });
    });
};

// (7) PATCH /profile => localhost:PORT/user/profile/edit
exports.patchProfile = (req, res) => {
    console.log(req.body);

    User.patchProfile(req.body, (result) => {
        console.log('controller/Cuser.js >>', result);
        res.send(result);
    });
};

// (8) DELETE /user/profile/delete => localhost:PORT/user/profile/delete
exports.deleteProfile = (req, res) => {
    console.log(req.boay);

    User.deleteProfile(req.body, (result) => {
        console.log('controller/Cuser.js >>', result);
        res.send(result);
    });
};