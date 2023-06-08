console.log("IF_Condicionales - Ejercio a")
var randomNumber = Math.random()
var result = ""
if(randomNumber >= 0.5)
{
    result = "Greater than 0,5"
}
else
{
    result = "Lower than 0,5"
}
console.log(`El resultado es: ${result} porque el numero aleatorio es ${randomNumber}`)

console.log("IF_ELSE - Ejercio b")
var age = 15
if(age < 2)
{
    result = "Bebe"
}
else
{
    if(age >= 2 && age <= 12)
    {
        result = "Niño"
    }
    else 
    {
        if(age >= 13 && age <= 19)
        {
            result = "Adolescente"
        }
        else 
        {
            if(age >= 20 && age <= 30)
            {
                result = "Joven"
            }
            else 
            {
                if(age >= 31 && age <= 60)
                {
                    result = "Adulto"
                }
                else 
                {   
                    if(age >= 61 && age <= 75)
                    {
                        result = "Adulto mayor"
                    }
                    else 
                    {
                        result = "Anciano"
                    }
                }
            }
        }
    }
}
console.log(`El resultado es: ${result} porque la edad ingresada es ${age}`)

console.log("")
console.log("")
console.log("")