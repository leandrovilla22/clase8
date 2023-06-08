console.log("STRINGS - Ejercio a Mayuscula")
var a = 'JaVaScrIPt'
var result = a.toUpperCase()
console.log(`El resultado es: ${result}`)
console.log("---------------------------------------------------")

console.log("STRINGS - Ejercio b Primeros 5")
result = a.substring(0,5)
console.log(`El resultado es: ${result}, palabra original: ${a}`)

console.log("---------------------------------------------------")

console.log("STRINGS - Ejercio c ultimos 3")
result = a.substring(a.length - 3,a.length)
console.log(`El resultado es: ${result}, palabra original: ${a}`)

console.log("---------------------------------------------------")

console.log("STRINGS - Ejercio d substring, toUpperCase, toLowerCase y operador +")
result = (a.substring(0, 1).toUpperCase()) + (a.substring(1,a.length).toLowerCase())
console.log(`El resultado es: ${result}, palabra original: ${a}`)

console.log("---------------------------------------------------")

console.log("STRINGS - Ejercio e indexOf")
a += " espacio en blanco"
result = a.indexOf(' ')
console.log(`El resultado es: ${result}, palabra original: ${a}`)

console.log("---------------------------------------------------")

console.log("STRINGS - Ejercio f indexOf, substring, toUpperCase, toLowerCase y el operador +")
a = "JaVaScrIPt coDIgo"
result = (a.substring(0, 1).toUpperCase()) + (a.substring(1,a.indexOf(' ')).toLowerCase()) + (a.substring(a.indexOf(' '), a.indexOf(' ')+2).toUpperCase()) + (a.substring(a.indexOf(' ')+2, a.length).toLowerCase())
console.log(`El resultado es: ${result}, palabra original: ${a}`)

console.log("")
console.log("")
console.log("")