const one = document.querySelector('.one');
const sidebar = document.querySelector('.sidebar');
const back=document.getElementById('back');
const content=document.getElementsByClassName('.main-content');

one.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
  // document.querySelectorAll('.main-content').style.display='block';
  one.style.display='none';

});

back.addEventListener('click', () => {
 sidebar.classList.toggle('expanded'); 

  // document.querySelectorAll('.main-content').style.display='block';
});