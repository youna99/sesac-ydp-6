let age = prompt('나이를 입력해주세요~')

if (age >= 20){
    console.log('성인');
} else if (age >= 17) {
    console.log('고등학생');
} else if (age >= 14) {
    console.log('중학생');
} else if (age >= 8) {
    console.log('초등학생');
} else if (age >= 0) {
    console.log('유아');
} else {
    console.log('잘못 입력하셨습니다!!');
}