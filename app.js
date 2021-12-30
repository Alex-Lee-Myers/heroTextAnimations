const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power3.easeOut"}, // default duration and ease
});

tl.fromTo(".hero-img", // target
    {scale: 1.3, borderRadius: "0rem"}, // from
    { // to
    scale: 1, 
    borderRadius: "2rem", 
    delay: 0.5, 
    duration: 2.5, 
    ease: "elastic.out(1.5, 1)",
});

tl.fromTo('.cta1', {x:'100%', opacity: 0.5}, {x:0,opacity:1}, "<20%"); 
tl.fromTo('.cta3', {x:'-100%', opacity: 0.5}, {x:0,opacity:1}, "<20%"); 
tl.fromTo('.cta2', {x:'100%', opacity: 0.5}, {x:0,opacity:1}, "<20%");
tl.fromTo('.cta4', {x:'100%', opacity: 0.5}, {x:0,opacity:1}, "<20%");
tl.fromTo('.cta6', {x:'-100%', opacity: 0.5}, {x:0,opacity:1}, "<20%");
tl.fromTo('.cta5', {x:'100%', opacity: 0.5}, {x:0,opacity:1}, "<20%");
tl.fromTo(".cta-btn", {y:20, opacity: 0}, {y:0,opacity:1}, "<");

//Split text alternative
const logo = document.querySelector('.logo');
const letters = logo.textContent.split(''); //grabbing the letters

logo.textContent = ''; //clearing the html

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>'; //adding span tags to each letter
});

gsap.set('.letter', {display: "inline-block"}); //setting the display to inline-block

gsap.fromTo( //animating the letters
    ".letter", //selecting the letters
    {y: "100%"}, //starting position
    {y:0, delay: 2, stagger: 0.05, ease: "back.out(3)"} //ending position
);