console.log('member called');
const idInputBox = document.querySelector('#username');
const idCheckBox = document.querySelector('.username_check');
let isValid1 = false;
let isValid2 = false;

//모달 관리
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.open_modal_btn');
  const closeBtn = document.querySelector('.close_btn');

  openModalBtn.addEventListener('click', function(e) {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// 아이디 존재 여부 체크
// 아이디 길이 체크, 존재 여부 체크 동시에 진행
// 요청이 너무 많이 발생하는거 아닌가?
// 이벤트 조건을 인풋이 아니고 텍스트박스에서 포커스가 벗어났을때로 변경할 지 검토
/**
 * 체크 후 결과 출력 함수, 타당함1 에 값을 조절해주는 녀석!
 */
function updateUI(message, isValid) {
  idCheckBox.style.color = isValid? 'green' : 'rgb(255, 105, 105)';
  idCheckBox.textContent = message;
  isValid1 = isValid;
}
/**
 * 길이검사함수
 */
function UsernameInput() {
  const inputLength = idInputBox.value.length;
  idCheckBox.style.opacity = '1';
  if (inputLength < 4) {
    updateUI('4글자 이상의 이름이 필요합니다!', false);
  } else if (inputLength > 10) {
    updateUI('10글자를 넘어서는 안됩니다', false);
  } else {
    checkUsername(idInputBox.value);
  }
}
/**
 * 존재여부 검사 함수 
 */
function checkUsername(username) {
  axios.post('/member/check', { username })
    .then(res => {
      console.log('client :',res);
      if (res.data) {
        updateUI('사용 가능합니다.', true);
      } else {
        updateUI('사용 중인 이름입니다.', false);
      }})
    .catch(err => {
      console.error('Error:', err);
      updateUI('DB 작업중 오류가 발생함!', false);
    });
}

// 변화 감지 , 실행
idInputBox.addEventListener('input', UsernameInput);



//타당함 2체크 체크박스에 체크되어있는지 여부 검사
const checkbox = document.querySelector('#readmecheck');
checkbox.addEventListener('change', function() {
  const isValid2 = this.checked;
});



// 가입 버튼 활성화
const signupBtn = document.querySelector('.signup_btn');

function updateButtonState() {
    if (isValid1 && isValid2) {
        signupBtn.disabled = false;
        signupBtn.classList.add('active');
    } else {
        signupBtn.disabled = true;
        signupBtn.classList.remove('active');
    }
}

// isValid1이 변경될 때 (예: 사용자 이름 확인 후)
function updateUsernameValidity(isValid) {
    isValid1 = isValid;
    updateButtonState();
}

// isValid2가 변경될 때 (체크박스 상태 변경 시)
document.querySelector('#readmecheck').addEventListener('change', function() {
    isValid2 = this.checked;
    updateButtonState();
});

// 초기 상태 설정
updateButtonState();


function signupSubmit(){
  axios({
    method: 'post',
    url: '/member',
    data: {
      member_name: document.querySelector('#username').value,
      member_password: document.querySelector('#userpassword').value
    }
  }).then((res) => {
    alert('회원가입에 성공했습니다. 로그인 페이지로 돌아갈게요!')
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  }).catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}

function toBoards() {
  window.location.href = '/boards';
}