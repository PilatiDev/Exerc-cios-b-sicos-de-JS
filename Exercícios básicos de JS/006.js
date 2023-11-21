const frase = prompt(`Digite uma frase:`);

const fraseJs = frase.includes(`JavaScript`);

let countA = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === "a") {
    countA++;
  }
}

if (fraseJs === JavaScript) {
  console.log(`Frase digitada: ${frase}`);
} else {
  console.log(`Você digitou: ${frase}`);
}

console.log(`a letra "A" aparece ${countA} vezes na frase.`);
