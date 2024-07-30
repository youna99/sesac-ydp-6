const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
  override: true,
});

const saltN = process.env.SALTROUND; //2^10 회 반복


/**
 * 솔트 라운드 숫자가 커진다? => 해시 생성 시간이 느려짐, 보안성이 향상됨
 * 비밀번호 해싱 함수 정의
 * @param {*} pw 
 * @returns : 비밀번호를 반환
 */

exports.hashPw = (pw) =>{
  console.log(saltN);
  return bcrypt.hashSync(pw, +saltN);
}

/** 비밀번호 정답 검증 함수 정의
 * 
 * @param {*} pw 
 * @param {*} originalPW 
 * @returns  사용자가 입력한 평문과 해시값을 비교하여 boolean 형태로 반환
 */ 
exports.comparePw=(pw, originalPW)=>{

  return bcrypt.compareSync(pw,originalPW);
}