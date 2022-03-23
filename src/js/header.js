const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Header

window.addEventListener('scroll',handleScrollHeader)
function handleScrollHeader(){
    const header = $('.header');
    const logo = $('.header__mid-logo');
    console.log(window.scrollY);

    if(window.scrollY > 150){
        header.classList.add('header--scrolled');
        logo.style.display = 'none';
    }else{
        logo.style.display = 'block';
        header.classList.remove('header--scrolled');
    }
}