function primeNumb(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return `${num} - составное число`;
            } else if (num > 1000) {
                return `Данные неверны`;
            }
        } 
        return `${num} - простое число`
    } else if (num < 2) {
        return `Число должно быть не менее 2`;
    }
}
  
  console.log(primeNumb(13));