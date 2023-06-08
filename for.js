var arreglo = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']
/* Ejercio a */
for (let i = 0; i < arreglo.length; i++) {
    alert(arreglo[i]);
}

/* Ejercio b */
for (let i = 0; i < arreglo.length; i++) {
    var result = (arreglo[i].substring(0, 1).toUpperCase()) + (arreglo[i].substring(1,arreglo[i].length).toLowerCase())
    alert(result);
}

/* Ejercio c */
var sentence = ""
for (let i = 0; i < arreglo.length; i++) {
    sentence += arreglo[i]
}
alert(sentence);


/* Ejercio d */
console.log("FOR - Ejercicio d")
arreglo = []
for (let i = 0; i < 10; i++) {
   arreglo.push(i)
}
console.log(arreglo)


console.log("")
console.log("")
console.log("")