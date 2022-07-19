var palabras = ["norte", "castillo", "lunes"];
var numeroAleatorio = Math.round (Math.random() * (palabras.length-1));
console.log(numeroAleatorio);
var palabraAleatoria = palabras[numeroAleatorio];
console.log(palabraAleatoria);
console.log(palabraAleatoria[1]);

function elegirLetra(i){
    var i=0;
    console.log(palabraAleatoria[i]);
}

function crearP(i){
    var p = document.createElement("p");
    p.classList.add(".letra");
    p.textContent = elegirLetra(i)
}

elegirLetra;


