const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('#close');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.querySelector('#container')


menuBtn.addEventListener('click' , () => {
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display ='none';
})
// body.addEventListener('click' , () => {
//     sideMenu.style.display ='none';
// })


// themeToggle.addEventListener('click' , () => {
//     themeToggle.body.color ='black'
// })



const age = prompt('enter age ');
// const isOldEnough = age > 18;
// const legalAge = 18

if(age > 18) {alert('sarah is old enough to start driving')}
else if (age <= 18 && age >= 18 ){alert('sarah needs to take a driving lesson')}
else {
         age < 18
    alert('sarah is too young to drive. wait another; (alert(years)) years')
}