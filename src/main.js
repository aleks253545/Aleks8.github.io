import './main.scss';
import '../node_modules/jquery/src/jquery'


const src=['img/slider2.jpg','img/slider1.jpg','img/Mountains-and-hills-julian-alps.png'];
const slider = document.querySelector('.slider');
renderSlider(src);
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}
function prevSlide() {
    showSlides(slideIndex -= 1);  
}


function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slider-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
slider.onclick=(event)=>{
    if(event.target.classList.contains('slider__next')){
        nextSlide();
    }else if(event.target.classList.contains('slider__prev')) {
        prevSlide()
    }
}
function renderSlider(source){
    source.map(item=>{
        let li =document.createElement('li'),
        img=document.createElement('img'),
        title=document.createElement('div');
        li.classList.add('slider-item');
        img.classList.add('slider-item__img');
        title.classList.add('slider-item__text');
        img.setAttribute('src',item);
        li.append(img,title);
        slider.append(li);
    });
    let link_prev=document.createElement('a');
    let link_next=document.createElement('a');
    link_prev.classList.add('slider__prev');
    link_prev.innerHTML='&#10094;';
    link_next.classList.add('slider__next');
    link_next.innerHTML='&#10095;';
    slider.append(link_prev,link_next);

}
let param=3;
$.getJSON('https://baconipsum.com/api/?callback=?', 
	{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':`${param}` }, 
	function(baconGoodness){
        $.getJSON('https://picsum.photos/v2/list?',
            {'page':'2','limit':`${param}`} ,
            function(images){
                baconGoodness.forEach((element,index)=> {
                $('.posts').append($('<div class="post"></div>').append(`<img class=" post-img" src="${images[index].download_url}">`).append(`<span class="post-text">${baconGoodness[index]}</span>`));
            });
            });
    });

