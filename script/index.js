let edad = prompt("ingrese su edad")
if (edad >= 18){
    alert("Perfecto, puedes ingresar.")
} else{
    alert("Sos menor de edad, no puedes ingresar.")
}

function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 350;
    var euro = 420;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: " + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}