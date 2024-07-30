const mainRouter = require('../router/mainRouter');
const memberRouter = require('../router/memberRouter');
const boardRouter = require('../router/boardRouter');

exports.routerMiddleware = (app) => {
  app.use('/', mainRouter);
  app.use('/board', boardRouter);
  app.use('/member', memberRouter);
};