let input = document.querySelector('input')
let answer = document.querySelectorAll('p')[1]
let button = document.querySelector('button')


let sum = 0

function calc() {
    let inputValues = input.value.split(',').map(Number)

    inputValues.forEach(add)
    function add(item) {
        sum += item

        
    }
    answer.innerText += ' ' + sum
}

button.addEventListener('click', ()=>{
    calc()
    input.value = ' '
})
