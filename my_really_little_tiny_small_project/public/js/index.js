console.log('index called');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#userpassword');
const signinBtn = document.querySelector('.signin_btn');

function updateButtonState() {
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        signinBtn.classList.add('active');
        signinBtn.disabled = false;
    } else {
        signinBtn.classList.remove('active');
        signinBtn.disabled = true;
    }
}

usernameInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);

// 초기 상태 설정
updateButtonState();

function signinSubmit(){
    axios({
        method: 'post',
        url: '/member/login',
        data: {
            member_name: usernameInput.value,
            member_password: passwordInput.value
        }
    }).then((res) => {
        console.log(res.data);
        if (res.data.redirect) {
            window.location.href = res.data.redirect;
        }
    }).catch(err => {
        if (err.response) {
            alert(err.response.data.message || '로그인에 실패했습니다.');
        } else if (err.request) {
            alert('서버에 연결할 수 없습니다.');
        } else {
            alert('요청 중 오류가 발생했습니다.');
        }
        console.error('Error:', err);
    });
}