let nomeCompleto = prompt(`digite seu nome completo em minusculo`)
let iniciais = nomeCompleto.split(` `)
iniciais.map(palavra => palavra.charAt(0).toUpperCase()).join("")

console.log(iniciais)