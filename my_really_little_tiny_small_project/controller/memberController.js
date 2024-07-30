const db = require('../models/index');
const { Member, Board } = db;

exports.showMember = (req, res) => {
  res.render('member', { title: '어서오세요 회원가입 페이지 입니다!' });
};
exports.showMembers = async(req, res) => {
  try{
    const result = await Member.findAll();
    res.json(result);
  }catch(err){
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
}

exports.checkMember = async(req,res)=>{
  try{
    const { username } = req.body;
    const result = await Member.findOne({
      where:{member_name : username},
      attributes: ['member_name']
    });    
    const isExist = result !== null;
    res.json(!isExist);
  }catch(err){
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
}

exports.signupMember = async (req, res) => {
  try {
    console.log("req.body at controller", req.body);
    const { member_name, member_password } = req.body;
    const result = await Member.create({
      member_name,
      member_password,
    });
    res.status(201).json({ 
      message: '회원가입이 완료되었습니다.', 
      redirect: '/' 
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.json({ error: '이미 사용 중인 이름입니다.' });
    } else {
      console.error(err);
      res.status(500).send('이거 만든놈이 몬가 잘못했음');
    }
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member_password = req.body.member_password;
    const user = req.session.user;
    console.log(user.id);
    // 사용자 정보 업데이트
    const result = await Member.update(
      { member_password },
      { where: { member_id: user.id } }
    );

    res.status(201).json({ 
      message: '회원가입이 완료되었습니다.', 
      redirect: `/member/profile/${user.id}` ,
      user:user 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('사용자 정보 업데이트 중 오류가 발생했습니다.');
  }
};

exports.deleteMember = async (req, res) => {
  console.log('controller deleteMember' ,req.params);
  const id = req.params.id;
  const user = req.session.user;
  try {
    if(user && user.id === parseInt(id)) {
      const target = await Member.findByPk(id);
      
      await target.destroy();

      res.status(201).json({
        redirect: '/' 
      });
    } else {
      res.json({ 
        redirect: '/' 
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
};

exports.signinMember = async (req, res) => {
  try {
    const { member_name, member_password } = req.body;
    const result = await Member.findOne({
      where: {
        member_name: member_name,
        member_password: member_password
      },
      attributes: ['member_id', 'member_name']
    });
    // 사용자 정보를 세션 객체에 저장
    console.log(result);
    req.session.user = {
      id: result.member_id,
      name: result.member_name
    };
    console.log(req.session.user);
    res.status(201).json({ 
      message: '회원가입이 완료되었습니다.', 
      redirect: '/board' 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('이거 만든놈이 몬가 잘못했음');
  }
};

exports.profile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.session.user;
    if (user && user.id === parseInt(id)) {
      const result = await Member.findOne({
        where: { member_id: user.id },
        attributes: ['member_id', 'member_name', 'member_password', 'createdAt']
      });
      res.render('profile', {
        title: `${user.name}님의 프로필`,
        data: result,
        user :user
      });
    } else {
      res.redirect('/');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('프로필 조회 중 오류가 발생했습니다.');
  }
};