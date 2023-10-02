// slick libabry ko inatilazie krene ke liye ham ek file create kiye  in js me 

// jqury use 
// hamara page jaise load hoga (woise he es function ke ander jo function hai wo trigger ho jygiii 


$(document).ready(function(){
// wrapper slect krnge jo html me kiye hai ""Slider"""name ka
$('.slider').slick({
    // arrows button ke liye 
// arroes nahi chiye 
    arrows:false,
    dots:true,
    // in slider section we create a class its create a operater 
    appendDots:'.slider-dots',
    dotsClass:'dots',

    // after inspect and see ol and ul  then we reviews source

});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

 });








