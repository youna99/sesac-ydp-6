//모달 관리
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.open_modal_btn');
  const closeBtn = document.querySelector('.close_btn');
  const form1 = document.querySelector('form[name="modal_update"]');

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
    updateBoard();
    modal.style.display = 'none';
  });
});

const patchButton = document.querySelector('modal_update_btn');
const deleteButton = document.querySelector('detail_delete_btn');
const id =  document.querySelector('.detail_id');


function updateBoard() {
  const form = document.forms['modal_update'];
  console.log('id',form.elements.update_Board_Id.value);

  axios({
    method: 'patch',
    url: '/board',
    data: {
      board_id: form.elements.update_Board_Id.value,
      board_title: form.elements.update_Board_Title.value,
      board_content: form.elements.update_Board_Content.value
    }
  })
  .then((res) => {
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}

function deleteBoard() {
  if(confirm('정말로 삭제하시겠습니까?')){
    const id = document.querySelector('#detail_id').innerHTML;
    axios({
      method: 'delete',
      url: `/board/${id}`
    })
    .then( (res) => {
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
}


// 목록으로 돌아가는 버튼
document.getElementById('return_board_btn').addEventListener('click', () => {
  window.location.href = '/board';
});