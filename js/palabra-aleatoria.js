var palabras = ["norte", "castillo", "lunes"];
var numeroAleatorio = Math.round (Math.random() * (palabras.length-1));
console.log(numeroAleatorio);
var palabraAleatoria = palabras[numeroAleatorio];
console.log(palabraAleatoria);
console.log(palabraAleatoria[1]);
var i = 0;
var posicion1 = document.querySelector("#posicion-uno");
posicion1.textContent = palabraAleatoria[0];
i++;


function construirP(dato, clase){
    var p = document.createElement("p");
    p.textContent = dato;
    p.classList.add(clase);
    return p;
}

function construirLi (letra, clase){
    //Crear item de lista
    var letraLi = document.createElement("li");
      
    //Agregar nuevos valores al nuevo item
    
    letraLi.appendChild(construirP(letra, clase));

    return letraLi;
}

var lista = document.querySelector(".letras")

function crearItem(){
    while (i < palabraAleatoria.length) {
        lista.appendChild(construirLi(palabraAleatoria[i], "letra"));
        lista.classList.add("letras");
        i++ 
    }
}

crearItem();



