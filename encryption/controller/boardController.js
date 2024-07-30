const db = require('../models/index');
const { Member, Board } = db;

// 시간데이터 가공
function timeDataPolishing(date) {
  const today = new Date();
  const inputDate = new Date(date);

  if (
    today.getFullYear() === inputDate.getFullYear() 
    && today.getMonth() === inputDate.getMonth() 
    && today.getDate() === inputDate.getDate()
  ) {
    // 같은 날짜인 경우
    return inputDate.toLocaleString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  } else {
    // 다른 날짜인 경우
    return inputDate.toLocaleString('ko-KR', {
      month: '2-digit',
      day: '2-digit'
    });
  }
}

//게시글 목록 보여주기!
exports.showBoards = async(req, res) => {
  try {
    if (req.session.user) {
      const result = await Board.findAll({
        where: {
          is_active: true
        },
        include: {
          model: Member,
          attributes: ['member_name']
        },
        order: [['board_id', 'DESC']]
      });

      // 데이터 가공
      const polishedResult = result.map(board => ({
        ...board.dataValues,
        createdAt: timeDataPolishing(board.createdAt)
      }));

      const user = req.session.user;
      res.render('board', {
        title: `${user.name}님! 어서오세요`,
        data: polishedResult,
        user: user
      });
    } else {
      res.render('index', { title: 'my-tiny-little-small-project' });
    }
  } catch(err) {
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
};

//게시글 하나 보여주기!
exports.showBoard = async (req, res) => {
  try {
    if (req.session.user) {
      const { id } = req.params;
  
      const result = await Board.findOne({
        where: { board_id: id, is_active: true },
        attributes: ['board_id', 'board_writer', 'board_title', 'board_content', 'createdAt'],
        include: [
          {
            model: Member,
            attributes: ['member_id', 'member_name'],
          },
        ],
      });
      const user = req.session.user;
      if(result == null){
        return res.status(404).render('404', { 
          title : '죄송합니다! 페이지를 찾을 수 없습니다.', 
          message: '게시글을 찾을 수 없습니다.'
        });
      }
      res.render('boardDetail',{ 
        title: ` 게시글 ${result.board_title} 의 상세 페이지 입니다!`, 
        data: result, 
        user : user
      });
    }else{
      res.render('index', { title: 'my-tiny-little-small-project' });
    }
  } catch (err) {
    console.error('게시글 조회 중 오류 발생:', err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
};

exports.postBoard = async(req, res) => {
  try {
    console.log(req.body);
    const { board_title, board_content } = req.body;
    const { id, name } = req.session.user;
    const result = await Board.create({
      board_writer: id,
      board_title,
      board_content
    });
    res.status(201).json({ 
      message: '게시글 등록 완료', 
      redirect: '/board' 
    });
  } catch(err) {
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
};

exports.updateBoard = async (req, res) => {
  try {
    console.log('req.body',req.body);
    const { board_id, board_title, board_content } = req.body;

    console.log('board_id',board_id);
    const board = await Board.findOne({ where: { board_id, is_active: true } });
    
    if (!board) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }

    const [updatedRows] = await Board.update(
      { board_title, board_content },
      { where: { board_id } }
    );

    res.status(201).json({ 
      message: '게시글 수정 완료', 
      redirect: `/board/${board_id}` 
    });
  } catch (err) {
    console.error('게시글 업데이트 중 오류 발생:', err);
    res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
  }
};

exports.deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('deleteBoard : id ', id);
    const board = await Board.findOne({ where: { board_id: id, is_active: true } });
    if (!board) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }
    await board.destroy()
    
    res.status(201).json({ message: '게시글 삭제 완료', redirect: '/board' });
  } catch (err) {
    console.error('게시글 삭제 중 오류 발생:', err);
    res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
  }
};