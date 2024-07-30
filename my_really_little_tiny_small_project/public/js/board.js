//모달 관리
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.open_modal_btn');
  const closeBtn = document.querySelector('.close_btn');
  const form1 = document.querySelector('form[name="modal_post"]');

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

  form1.addEventListener('submit', function(e) {
    e.preventDefault();
    postBoard();
    modal.style.display = 'none';
  });
});

console.log('board called');
function postBoard() {
  const form = document.forms['modal_post'];
  const boardTitle = form.elements.wrtie_Board_Title;
  const boardContent= form.elements.write_Board_Content;
  console.log(boardTitle.value);
  console.log(boardContent.value);

  axios({
    method: 'post',
    url: '/board',
    data: {
      board_title: boardTitle.value,
      board_content: boardContent.value
    }
  })
  .then((res) => {
    console.log(res.data);
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}