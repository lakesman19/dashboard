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
 


// const age = prompt('enter age');
// // const isOldEnough = age > 18;
// // const legalAge = 18

// if (age.length === 0) {
//     console.log(age.length)
//     alert("Please Enter A Number")
// }
// // else if(age === toString()) {alert('Please enter a valid Number')} /
// else if(age < 18 && age >= 0 ){
//     let newAge = (18 - age);
//     alert(`serah needs to wait for ${newAge} before she can drive`) 
// }
// else if(age >= 19) {alert('sarah is old enough to start driving')}
// else if (age === 18  ) {alert('sarah needs to take a driving lesson')}

// else {alert('Please enter a valid age')}
// else {
//         //  age < 18
//     alert('sarah is too young to drive .wait another years')
// }

// function display() {
//     var z = prompt("enter your name...");
//     if (z != null) {
//         document.getElementById("demo").innerHTML = "thankyou " + z + "..";
//         document.getElementById("case").style.display = 'block';
//         dis(z);
//     }
//     else
//         document.getElementById("demo").innerHTML = "thankyou";
// }
// function dis(arg) {
//     alert("your mark is" + arg);
// }