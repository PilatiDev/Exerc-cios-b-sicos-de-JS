const circulo = {
    raio: 13,
    calcularArea: function(){
        let area = Math.PI * Math.pow(this.raio, 2);
        return area.toFixed(2)
    }
}

console.log(`Raio do circulo: ${circulo.raio}`)
console.log(`Área do círculo: ${circulo.calcularArea()}`)
