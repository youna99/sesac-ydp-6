let username=document.querySelector('#user_info_username');
let userpasword=document.querySelector('#user_info_userpassword');

/**
 * 회원정보 수정 요청, 
 */
function memberUpdate() {
  axios({
    method: 'patch',
    url:'/member',
    data:{
      member_password : document.querySelector('#user_info_userpassword').value
    }
  }) .then((res) => {
    alert(res.data.message);
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}
/**
 * 회원정보 삭제 요청,
 * 
 */
function memberDelete() {
  const id = document.querySelector('#user_info_id').value
  axios({
    method: 'delete',
    url:`/member/${id}`,
    data:{
      member_id : id,
   }
  }) .then((res) => {
    alert('회원 탈퇴 되었습니다.');
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}