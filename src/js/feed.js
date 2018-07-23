// __ Function Share Comment:
let comments = []; // Where the array is gonna live

function share() {
  comments.push(input.value);
  console.log(comments);
  printComments(comments);
  input.value = ''; // The string is empty because it fills when the user send the comment
}

function printComments(comments) {
  output.innerHTML = ''; // It's empty until the function fills it.
  comments.forEach(function(value) {
    node = document.createElement('p'); // We create a dinamic paragraph
    text = document.createTextNode(value);
    node.appendChild(text);
    output.appendChild(node);
  });
}

const output = document.getElementById('comentarios');
const input = document.getElementById('entrada');


//
//
// let comment = document.getElementById('entrada');
//
// const share = () => {
//   let comentario = comment.value;
//   const getCommits = document.getElementById('comentarios');
//   // EN algún lugar le tengo que insertar la información comentario
//   // `<textarea id="demo" cols="20" rows="3" class="form-control" readonly="true"></textarea>`
// };
