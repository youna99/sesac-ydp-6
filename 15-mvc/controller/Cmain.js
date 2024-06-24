// 경로와 연결될 함수 내용 정의
// 경로와 연결되는 함수이기에 req객체와 res 객체 사용 가능

// model 불러오기
const { getDbComments } = require('../model/Comment');

// 함수를 정의하면서 내보내기.
exports.getMain = (req, res) => {
    res.render('index');
}

exports.getComments = (req, res) => {
    res.render('comments', { comments: getDbComments() }); // 객체 리터럴 형태로 반환값(댓글목록)이 comments에 할당되어 comments.ejs에서 사용 가능.
} // 첫번째인자는 렌더링할 템플릿 파일의 이름
// 두번째 인자는 템플릿(comments)에 전달할 데이터를 객체 형태로 전달

exports.getComment = (req, res) => {
    // console.log(req.params); // { id: '1' }
    // console.log(req.params.id); // '1' // 자료형 string

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id;
    const dbComments = getDbComments(); // 댓글 목록을 dbComments에 저장
    console.log(dbComments[commentId - 1]); // {id: 1,userid: 'helloworld',date: '2022-10-31',comment: '안녕하세요^~^'}
    // id값을 가져오는데 index는 0부터 시작하기 때문에 -1를 함!

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!dbComments[commentId - 1]) { // !undefined => true
        return res.render('404');
    }

    res.render('comment', { comment: dbComments[commentId - 1]}); // 댓글 목록에서 id값을 comment에 할당
} // dbComments[commentId - 1]를 사용하는 이유?
// -> URL로 전달된 ID 값을 배열 인덱스로 변환하기 위해