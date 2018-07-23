let text = document.getElementById('comentario');
let boton = document.getElementById('botonP');
let newPost = document.getElementById('container');
console.log(text);

boton.addEventListener("click",event =>{
  console.log('holi');
  let texto = text.value;
  console.log(texto);
  let divPost = '';
  divPost += `<div class="card">
                    <div class="contenidoC">
                        <p>${texto}</p>
                    </div>
                </div>`
                console.log(divPost);
                container.innerHTML = divPost;
})
