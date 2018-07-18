let texto = document.getElementById('texto');
let boton = document.getElementById('botonP');
let comentario = document.getElementById('comentario');
boton.addEventListener('click', evento =>{
comentario.innerHTML = texto.value
});