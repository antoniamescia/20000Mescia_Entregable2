// Pido cédula al usuario
let cedula = prompt('Ingrese su número de cédula, sin puntos ni guiones.')

//Chequeo que la cédula tenga 8 dígitos. Si no, la pido nuevamente. 
if (cedula.length != 8) {
    alert("La cédula ingresada es incorrecta, debe tener 9 dígitos.")
    cedula = prompt("Por favor, ingrésela de nuevo.")
}

//Divido la cédula ingresada en los primeros 7 dígitos y el dígito verificador
let verificador = parseInt(cedula.slice(-1), 10)
let sinVerificador = parseInt(cedula.slice(0, -1),10)

let digito1 = parseInt(cedula.slice(0,1))
let digito2 = parseInt(cedula.slice(1,2))
let digito3 = parseInt(cedula.slice(2,3))
let digito4 = parseInt(cedula.slice(3,4))
let digito5 = parseInt(cedula.slice(4,5))
let digito6 = parseInt(cedula.slice(5,6))
let digito7 = parseInt(cedula.slice(6,7))

//Cálculos para obtener el dígito verificador
digito1 *= 2
digito2 *= 9
digito3 *= 8
digito4 *= 7
digito5 *= 6
digito6 *= 3
digito7 *= 4

let sum = digito1+digito2+digito3+digito4+digito5+digito6+digito7
let m = sum % 10
let h = (10 - m) % 10

//Chequeo si el dígito verificador ingresado es válido
if (verificador === h) {
    alert("Tu número de cédula es válido")
} else {
    alert("Atención. ⚠️ Tu número de cédula es inválido.")
}

