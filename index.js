const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('#close');
const themeToggle = document.querySelector('.theme-toggle');


menuBtn.addEventListener('click' , () => {
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display ='none';
})

// themeToggle.addEventListener('click' , () => {
//     themeToggle.body.color ='black'
// })