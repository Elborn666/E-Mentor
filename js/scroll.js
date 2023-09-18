function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let button = document.querySelector('.hero__navigation')
let bottom = document.querySelector('.ourstatistic')

button.addEventListener('click', () => {
    scrollTo(bottom);
    console.log('Click for button')
})