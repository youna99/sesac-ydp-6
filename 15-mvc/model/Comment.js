// (임시) DB에서 전체 댓글 목록을 읽어오는 함수

exports.getDbComments = () => {
    return [
        {
            id: 1,
            userid: 'helloworld',
            date: '2022-10-31',
            comment: '안녕하세요^~^',
        },
        {
            id: 2,
            userid: 'happy',
            date: '2022-11-01',
            comment: '반가워유',
        },
        {
            id: 3,
            userid: 'lucky',
            date: '2022-11-02',
            comment: '오 신기하군',
        },
        {
            id: 4,
            userid: 'bestpart',
            date: '2022-11-02',
            comment: '첫 댓글입니당ㅎㅎ',
        },
        {
            id: 5,
            userid: 'smail',
            date: '2022-11-03',
            comment: '우와 ^_^',
        },
    ]
}