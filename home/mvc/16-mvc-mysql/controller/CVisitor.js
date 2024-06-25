const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req, res) => { // *2. 컨트롤러에서 요청(req)받아서 모델에게 데이터 달라고함.
  // console.log(Visitor.getVisitors); // [Function (anonymous)]

  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  Visitor.getVisitors((result) => {// *4. 모델에게 받은 데이터 정보를 result에 저장하고 view/visitor.ejs로 렌더링(응답 res)
    // result 매개변수
    // : model/Visitor.js getVisitors함수의 callback(rows)의 "rows" 변수에 대응
  
    console.log('controller/CVisitor.js >> ', result);

    res.render('visitor', { data: result });
  })
};

exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    // result: rows.insertId
    console.log('controller/CVisitor.js >> ', result);
    // controller/CVisitor.js >>  4

    res.send({id: result, 
      name: req.body.name, 
      comment: req.body.comment})
  });
}

