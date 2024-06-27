// TODO: DB(mysql) 연결
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'codingon'
});

// TODO: 모델 코드

exports.postSignup = (data, callback) => {
    conn.query(`insert into user(userid, pw, name) values ('${data.userid}', '${data.pw}', '${data.name}');`,
        (err, rows) => {
        if(err) {
            throw err;
        }

        console.log('model/User.js>>', rows);
        callback(rows.insertId);
    });
};

exports.postSignin = (data, callback) => {
    conn.query(`select userid, pw from user where userid = '${data.userid}' and pw = '${data.pw}';`,
        (err, rows) =>{
            if(err) {
                throw err;
            }
            console.log('model/User.js >>', rows);
            callback(rows);
        });
};

exports.postProfile = (data, callback) => {
    conn.query(`select * from user where userid = '${data.userid}';`,
        (err, rows) => {
            if(err) {
                throw err;
            }
            console.log('model/User.js >>', rows); // RowDataPacket { id: 16, userid: 'hello', name: 'hello', pw: '1234' }
            callback(rows);
        });
};

exports.patchProfile = (data, callback) => {
    conn.query(`update user set pw = '${data.pw}', name = '${data.name}' where id = '${data.id}';`,
        (err, rows) => {
            if(err) {
                throw err;
            }
            console.log('model/User.js >>', rows);
            callback(rows);
        }
    );
};

exports.deleteProfile = (data, callback) => {
    conn.query(`delete from user where id = '${data.id}';`,
        (err, rows) => {
            if(err) {
                throw err;
            }
            console.log('model/User.js >>', rows);
            callback(rows);
        }
    );
};