const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('#close');
const themeToggle = document.querySelector('.theme-toggle');
// const body = document.querySelector('#container')


menuBtn.addEventListener('click' , () => {
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display ='none';
})
// body.addEventListener('click' , () => {
//     sideMenu.style.display ='none';
// })


themeToggle.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme-variables');


    themeToggle.querySelector("span:nth-child(1)").classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})