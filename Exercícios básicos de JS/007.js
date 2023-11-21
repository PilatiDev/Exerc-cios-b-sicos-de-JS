let numeros = []

for(let i = 0; i<50; i++){
    numeros.push(i)
}

console.log(numeros)

const num1 = Number.parseInt(Math.random())
const num2 = Number.parseInt(Math.random())


const numIgual = num1 === num2 ? `Os numeros são iguais` : `Os números não são iguais`

console.log(numIgual)
console.log(num1)
