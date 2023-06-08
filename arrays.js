
var a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("ARRAYS - Ejercio a (mes 5 y 11)")
console.log(`Mes 5: ${a[4]}, Mes 11: ${a[10]}`)
console.log("")

console.log("ARRAYS - Ejercio b orden alfabetico")
console.log(`El resultado es: ${a.sort()}`)
console.log("")

console.log("ARRAYS - Ejercio c agrega elementos")
a.unshift("AL PRICIPIO")
a.push("AL FINAL")
console.log(`El resultado es: ${a}`)
console.log("")

console.log("ARRAYS - Ejercio c quitan elementos")
a.shift()
a.pop()
console.log(`El resultado es: ${a}`)
console.log("")

console.log("ARRAYS - Ejercio d invierte orden")
console.log(`El resultado es: ${a.reverse()}`)
console.log("")

console.log("ARRAYS - Ejercio f JOIN")
console.log(`El resultado es: ${a.join('-')}`)
console.log("")

console.log("ARRAYS - Ejercio g slice")
a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(`El resultado es: ${a.slice(4, 11)}`)
console.log("")


console.log("")
console.log("")
console.log("")