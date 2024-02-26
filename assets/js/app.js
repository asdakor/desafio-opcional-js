function ingresar2(){
    const num1 = +prompt('ingresa el numero 1')
    const num2 = +prompt('ingresa el numero 2')
    const suma = num1+num2
    const resta = num1-num2
    const multiplicacion = num1*num2
    const division = num1/num2
    const modulo = num1%num2
    document.getElementById('suma').innerText = 'La suma es: '+suma
    document.getElementById('resta').innerText = 'La resta es: '+ resta
    document.getElementById('multiplicacion').innerText = 'La multiplicacion es: '+ multiplicacion
    document.getElementById('division').innerText ='La division es: '+ division
    document.getElementById('modulo').innerText = 'El modulo es: '+ modulo
}
function ingresar3(){
    let temp = +prompt('ingresa la temperatura en °C')

    let kelvin = temp+273.15
    let fahrenheit = (temp*(9/5))+32

    document.getElementById('fahrenheit').innerText = 'La temperatura en fahrenheit es: '+fahrenheit
    document.getElementById('kelvin').innerText = 'La temperatura en kelvin es: '+ kelvin


}

function ingresar4(){
    let diasing = +prompt('ingrese la cantidad de dias: ')
    let anios = Math.trunc(diasing/365)
    let diasrestantes = diasing-(anios*365)
    let semanas = Math.trunc(diasrestantes/7)
    diasrestantes = diasrestantes-(semanas*7)
    let dias = diasrestantes
    document.getElementById('anios').innerText = 'Años: '+ anios
    document.getElementById('semanas').innerText = 'Semanas: '+ semanas
    document.getElementById('dias').innerText = 'Dias: '+ dias
}

function ingresar5(){
    const num1 = +prompt('Ingresa numero 1:')
    const num2 = +prompt('Ingresa numero 2:')
    const num3 = +prompt('Ingresa numero 3:')
    const num4 = +prompt('Ingresa numero 4:')
    const num5 = +prompt('Ingresa numero 5:')

    let sumatoria = num1+num2+num3+num4+num5
    let promedio = sumatoria/5

    document.getElementById('sumatoria').innerText = 'Sumatoria: '+ sumatoria
    document.getElementById('promedio').innerText = 'Promedio: '+ promedio
}