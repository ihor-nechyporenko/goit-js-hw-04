// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// Fi = Fi-1 + Fi-2

// F0 = 0, F1 = 1, F2 = 1, F3 = 2, F4 = 3, F5 = 5, F6 = 8, F7 = 13, F8 = 21

// i = 0 -> [0]
// i = 1 -> [0, 1]
// i = 2 -> [0, 1, 1]
// i = 3 -> [0, 1, 1, 2]
// i = 4 -> [0, 1, 1, 2, 3]
// i = 5 -> [0, 1, 1, 2, 3, 5]
// i = 6 -> [0, 1, 1, 2, 3, 5, 8]
// ...............
// i = number -> [0, 1, 1, 2, 3, ....F(number)]

function fibonacci(number) {
    const fibonacciNumbers = [0, 1];

    if (!(number < 2)) {
        for (let i = 2; i <= number; i += 1) {
            const lastNumber = fibonacciNumbers[fibonacciNumbers.length - 1];
            const secondLastNumber = fibonacciNumbers[fibonacciNumbers.length - 2];
            
            fibonacciNumbers.push(lastNumber + secondLastNumber);
        }
    
        return fibonacciNumbers;
    }

    return 'Введенное число должно быть больше 1';
}

console.log(fibonacci(12));