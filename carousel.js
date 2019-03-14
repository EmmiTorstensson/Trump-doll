
// JS för bilder i första "karusellen" (huvuden)


//Variabler för att hitta bilder
let track = document.querySelector('.carousel__track')
let slides = Array.from(track.children);

let nextButton = document.querySelector('.carousel__button--right');
let prevButton = document.querySelector('.carousel__button--left');

// Bestämmer hur mycket karusellen ska flytta sig
let slideWidth = slides[0].getBoundingClientRect().width;

// arrangera slides bredvid varandra 
let setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// Berättar vilken slide som syns 
let moveToSlide = (track, currentSlide, targetSlide) => {   
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// När jag klickar vänster, flytta slides åt vänster
prevButton.addEventListener('click', e => {
    let currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)
    
    /* För att gömma pilarna
    let prevIndex = slides.findIndex(slide => slide === prevSlide);
    // showOrHide(slides, prevButton, nextButton, prevIndex) */
    
});

// När jag klickar höger, flytta slides åt höger 

nextButton.addEventListener('click', e => {
    let currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;

    
    
    moveToSlide(track, currentSlide, nextSlide) 
    
    /* För att gömma pilarna
    let nextIndex = slides.findIndex(slide => slide === nextSlide);
    showOrHide(slides, prevButton, nextButton, nextIndex)  */
}); 




// Följande kod är samma som ovan fast för karusell två


let track2 = document.querySelector('.carousel__track2');
let slides2 = Array.from(track2.children);


let nextButton2 = document.querySelector('.carousel__button--right2')
let prevButton2 = document.querySelector('.carousel__button--left2')

let slideWidthBody = slides2[0].getBoundingClientRect().width;

let setSlidesPositionBody = (slide2, index2) => {
    slide2.style.left = slideWidthBody * index2 + 'px'
}



slides2.forEach(setSlidesPositionBody);

let moveToSlideBody = (track2, currentSlideBody, targetSlideBody) => {
    track2.style.transform = 'translateX(-' + targetSlideBody.style.left + ')';
    currentSlideBody.classList.remove('current-slide-body');
    targetSlideBody.classList.add('current-slide-body')
}

prevButton2.addEventListener('click', e =>{

    let currentSlideBody = track2.querySelector('.current-slide-body');
    let prevSlideBody = currentSlideBody.previousElementSibling;

    moveToSlideBody(track2, currentSlideBody, prevSlideBody)
})

nextButton2.addEventListener('click', e => {
    let currentSlideBody = track2.querySelector('.current-slide-body');
    let nextSlideBody = currentSlideBody.nextElementSibling;

    moveToSlideBody(track2, currentSlideBody, nextSlideBody)
})

// JS för pratbubbla

// En array med de olika alternativen 
let bubblearray = ['bubble1.png', 'bubble2.png', 'bubble3.png', 'bubble4.png'];

// funktion som slumpar indexnummer från arrayen och returnerar innehåll 
function rndBubble() {
    let randomImg = Math.floor(Math.random()*(bubblearray.length));
    document.canvas.src = "images/" + bubblearray[randomImg];
}






/*
Ville gömma vänster pil när man är längst åt vänster (och samma med höger) men fick 
det inte att funka

let showOrHide = (slides, prevButton, nextButtonHead) => {
if(slides[0]){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
} else if (slides.length-1){
    prevButton.classList.remove('is-hidden');
    nextButtonHead.classList.add('is.hidden')
} else{
    prevButton.classList.remove('is-hidden')
    nextButton.classList.remove('is-hidden')
}
}
*/