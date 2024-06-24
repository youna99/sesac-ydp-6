const { getDbComments } = require('../model/Comment');

// 함수를 정의하면서 내보내기.
exports.getMain = (req, res) => {
    res.render('index');
}

exports.getComments = (req, res) => {
    res.render('comments', { comments: getDbComments() });
}

exports.getComment = (req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id); // '1' // 자료형 string

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id;
    const dbComments = getDbComments();
    console.log(dbComments[commentId - 1]); // {id: 1,userid: 'helloworld',date: '2022-10-31',comment: '안녕하세요^~^'}
    // id값을 가져오는데 index는 0부터 시작하기 때문에 -1를 함!

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!dbComments[commentId - 1]) { // !undefined => true
        return res.render('404');
    }

    res.render('comment', { comment: dbComments[commentId - 1]});
}