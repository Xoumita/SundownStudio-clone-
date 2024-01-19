const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemC = document.querySelector(".elem-container")
let fixedI = document.querySelector(".fixed-img")

elemC.addEventListener("mouseenter", function(){
    fixedI.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixedI.style.display = "none"
})

let elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    console.log(e)
    e.addEventListener("mouseenter", function(){
     let image = e.getAttribute("data-image")
     console.log(image)
     fixedI.style.backgroundImage = `url(${image})`
    })
})


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });