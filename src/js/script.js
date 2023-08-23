// burger menu
const menu = document.querySelector('.menu');
const btn = document.querySelector('.burger');
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

btn.addEventListener('click', () => {
    menu.classList.toggle('menu_active')
    line1.classList.toggle("cross");
    line2.classList.toggle("cross");
    line3.classList.toggle("cross");
})


// custom select
const select = document.querySelector('.section-order-content__form-inputs__custom-select');
const select_trigger = document.querySelector('.section-order-content__form-inputs__custom-trigger');
const value = document.querySelectorAll('.section-order-content__form-inputs__custom-select-option');
const select__arrow = document.querySelector('.section-order-content__form-inputs__custom-trigger-arrow');

select_trigger.addEventListener('click', () => {
    select.classList.toggle('active')
    if(select.classList.contains('active')) {
        select_trigger.style.color = '#FFFFFF'
        select_trigger.style.backgroundColor = '#3D4050'
        select_trigger.style.border = '1px solid rgb(61, 64, 80)'
        select__arrow.setAttribute('src', './img/top_arrow.svg')
    } else {
        select_trigger.style.color = '#272733'
        select_trigger.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'
        select__arrow.setAttribute('src', './img/bottom_arrow.svg')
    }
})

for (let i of value){
    i.addEventListener('click', () => {
        select_trigger.innerHTML = `${i.getAttribute('value')} <img class="section-order-content__form-inputs__custom-trigger-arrow" src="./img/bottom_arrow.svg" alt="icon">`
        select.classList.remove('active')
        select_trigger.style.color = '#272733'
        select_trigger.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'
    })
}


// input line
const input_range = document.querySelector('.section-order-content__form-range__label-input-range');
const range_value = document.querySelector('.section-order-content__form-range__label-info__percent');

input_range.addEventListener('input', () => {
    range_value.innerHTML = `${input_range.value} %`
})

