
let inputNumber1 = parseInt(prompt("Введите меньшее число"));
let inputNumber2 = parseInt(prompt("Введите большее число"));


const numbersInt = setInterval(function () { 
    console.log(parseInt(inputNumber1++)); 
}, 1000); 

const numberTout = setTimeout(function() {
    clearInterval(numbersInt)
}, inputNumber2 * 1000 - 1000);