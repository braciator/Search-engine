const input = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const searchEngine = e => {
    const drink = e.target.value.toLowerCase();

    drinks.forEach(el => {
        const text = el.textContent;

        if(text.toLowerCase().indexOf(drink) !== -1){
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', searchEngine)