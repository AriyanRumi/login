const sidebar =document.querySelector('.sideBar')
const sideHeading =document.querySelector('.head')
const btn =document.querySelector('.closeBtn')
btn.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
    sideHeading.classList.toggle('active')
})

function loadFuntion(){
const loading =document.querySelector('.loading')
loading.classList.add('active')
}

const ham =document.querySelector('.hamburger i')
ham.addEventListener('click',()=>{
    const nav =document.querySelector('.navItem')
    nav.classList.toggle('active')
})