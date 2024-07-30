const session = require('express-session');

exports.showMain = (req, res) => {
  res.render('index', { title: 'my-tiny-little-small-project' });
};
exports.logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error('로그아웃 중 에러가 발생했습니다.', err);
        return res.status(500).send('로그아웃에 실패했습니다.');
      }

      res.clearCookie('connect.sid');

      res.render('index', { title: 'my-tiny-little-small-project' });
    });
  } catch (err) {
    console.error('로그아웃 처리 중 에러가 발생했습니다.', err);
    res.status(500).send('로그아웃에 실패했습니다.');
  }
};