const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Header
const btnUp = $('.up-top')
// const btnLike = $('.product__like')
const btnsLike = $$('.product__like');

    btnsLike.forEach(function(btn){
        btn.addEventListener('click',function(){
            btn.classList.toggle('product__like--active');
            
        })
    }
    )
      
    

btnUp.addEventListener('click', () => {

    window.scrollTo(0, 0);
})
window.addEventListener('scroll',handleScrollHeader)
function handleScrollHeader(){
    const header = $('.header');
    const logo = $('.header__mid-logo');


    if(window.scrollY > 150){
        header.classList.add('header--scrolled');
        logo.style.display = 'none';

    
    }else{
        logo.style.display = 'block';
       

        header.classList.remove('header--scrolled');
    }

    if(window.scrollY > 300){
        btnUp.style.opacity = 1;
    }else{
        btnUp.style.opacity = 0;
    }



}

