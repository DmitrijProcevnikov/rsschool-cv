const burger = document.querySelector('.burger');
const burger_1 = document.querySelector('.burger_1');
const burger_2 = document.querySelector('.burger_2');
const burger_3 = document.querySelector('.burger_3');
const fon = document.querySelector('.fon');
const h1= document.querySelector('.h1');
const nav_text = document.querySelectorAll('.nav_text');
const text_one = document.querySelector('.text_one');
const header = document.querySelector('.header');
const arr = ['foto1', ]

console.log(nav_text);
// const arr = Array.from(nav_text);
// console.log(arr);



burger.addEventListener('click', function(){
    burger_1.classList.toggle('burger_1_active')
    burger_2.classList.toggle('burger_2_active')
    burger_3.classList.toggle('burger_3_active')
    header.classList.toggle('header_active')
    text_one.classList.toggle('text_one_active')
    h1.classList.toggle('h1_active')
    fon.classList.toggle('fon_active')
    nav_text.forEach(item=>{
        item.classList.toggle('nav_text_active')
    })
})