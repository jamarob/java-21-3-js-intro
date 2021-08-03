console.log('it works')

const add = (a, b) => a + b

const multiply = (a, b) => a * b

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))

console.log('2 and 40 is', add(2, 40))
console.log('3 times 4 is', multiply(3, 4))
console.log('factorial of 3 is', factorial(3))
