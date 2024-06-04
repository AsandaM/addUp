let input = document.querySelector('input')
let answer = document.querySelectorAll('p')[1]
let button = document.querySelector('button')

let array = [1,2,3,4]

let sum =  0

array.forEach(addUp)
function addUp(item) {
    sum += item
}
 console.log(sum);

function calc() {
    let arr = [input.innerText].split(',').reduce((total, current) =>{
        return total + +current
    }, 0)
}

button.addEventListener('click', calc)
