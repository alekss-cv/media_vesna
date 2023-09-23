"use strict"
//all nav menu
let blockquote = document.querySelector(".blockquote")
let stages = document.querySelector(".stages")
let need_rehabilitation = document.querySelector(".need_rehabilitation")
let routines = document.querySelector(".routines")
let role = document.querySelector(".role")
let events = document.querySelector(".events")
let gallery = document.querySelector(".gallery")
let map = document.querySelector(".map")
//all sections
let section_blockquote = document.querySelector(".section_blockquote")
let section_stages = document.querySelector(".section_stages")
let section_need_rehabilitation = document.querySelector(".section_need_rehabilitation")
let section_routines = document.querySelector(".section_routines")
let section_role = document.querySelector(".section_role")
let section_events = document.querySelector(".section_events")
let section_gallery = document.querySelector(".section_gallery")
let section_map_ya = document.querySelector(".section_map_ya")

//all nav menu array
let nav_values = [
    blockquote ,
    stages,
    need_rehabilitation,
    routines,
    role,
    events,
    gallery,
    map,
]

//all sections array
let sections = [
    section_blockquote ,
    section_stages,
    section_need_rehabilitation,
    section_routines,
    section_role,
    section_events,
    section_gallery,
    section_map_ya,
]

//scroll from nav_menu to section
for (let i = 0 ; i<nav_values.length;i++){
    let value = nav_values[i]
    for (let j = 0 ;j<sections.length;j++){
        let section = sections[i]
        value.addEventListener("click" , (event)=>{
            event.preventDefault()
            section.scrollIntoView({
                behavior:"smooth",
            })
        })
    }

}

//slider swiper grid
var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
    },
});