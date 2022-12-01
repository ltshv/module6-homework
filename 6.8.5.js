const roundNumbers = (a,b) => {
    a = Math.round(prompt("Введите первое натуральное число"));
    b = Math.round(prompt("Введите второе натуральное число"));

    return Math.pow(a,b);
}

console.log(roundNumbers(2,3));