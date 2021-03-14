let menuClick = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlaces-header');

menuClick.addEventListener('click', () => {
    enlaces.classList.toggle('click');
    enlaces.style.clippath = 'circle(150% at 100% 0)';
    enlaces.style.transition = 'clip-path 2s'
});


let slider = document.querySelector(".slider")
let sliderIndividual = document.querySelectorAll(".cont-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},3000);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },3500)
    }
}
