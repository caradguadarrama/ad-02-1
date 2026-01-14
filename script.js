//1
const primerEncabezado = document.getElementById('red');
primerEncabezado.textContent = "Adiós";

//2
const encabezadoNaranja = document.getElementById('naranja');
encabezadoNaranja.style.color = "orange";

//3
const encabezadoClick = document.getElementById('clickable');
encabezadoClick.style.cursor = "pointer"; 

encabezadoClick.addEventListener('click', function() {
    this.style.color = "brown";
});
