// para cargar la información desde que abre la página
window.onload = print1 = () => { // declaramos la función print1
  let dataStorage = JSON.parse(localStorage.getItem('key')); // declaramos la variable dataStorage que 
  console.log(dataStorage);
  let resultado = document.getElementById('resultado');
  let pintar =
    `<ul>
    <li>Nombre: ${dataStorage.name}</li>
    <li>Apellido: ${dataStorage.apellido}</li>
    <li>Email: ${dataStorage.email}</li>
    </ul>`;

  resultado.innerHTML = pintar;
};

// const printPublication = () => {
//   let dataStorage = JSON.parse(localStorage.getItem('key'));
//   // let publicationBtn = document.getElementById('publicar');
//   let publicacion = document.getElementById('input-publicacion').value;
//   let pintarPublicacion =
//   `<div class="card grey lighten-3">
//     <div class="card-content white-text">
//               <p>${'HOLA'}</p>
//               </div>
//               <div class="card-action">
//               <i class="small material-icons right">mode_edit</i>
//               <i class="small material-icons right">favorite</i>
//               </div>
//               </div>`;
//   card.innerHTML = pintarPublicacion;
// };
