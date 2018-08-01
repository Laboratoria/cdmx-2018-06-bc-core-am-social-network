
// Contador de likes
let countLikes = 0;
const addLike = () => { /* Cuando sucede una llamada al evento del boton like, se acumula un punto que se mostrara al lado */
  countLikes = countLikes + 1;
  document.getElementById('likeCounter').textContent = countLikes;
};
