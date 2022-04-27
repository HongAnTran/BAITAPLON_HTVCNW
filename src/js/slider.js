const lengthItemShow = 6;
let index = 0;

const containerSlider = document.querySelector('.slider-tran');
const btnPrev  = document.querySelector('.slider-btn-prev')
const btnNext =  document.querySelector('.slider-btn-next')

function sliderCollectionNext(){

    if(index < lengthItemShow){
        index++;
        containerSlider.style.transform = `translateX(-${index * 20}%)`;
    }else{
        index = 1;
        containerSlider.style.transform = `translateX(-${index * 20}%)`;
    }
}

function sliderCollectionPrev(){
    if(index > 1){
        index--;
        containerSlider.style.transform = `translateX(-${index * 20}%)`;
    }else{
        index = lengthItemShow;
        containerSlider.style.transform = `translateX(-${index * 20}%)`;
    }
}

btnNext.addEventListener('click',sliderCollectionNext);
btnPrev.addEventListener('click',sliderCollectionPrev);