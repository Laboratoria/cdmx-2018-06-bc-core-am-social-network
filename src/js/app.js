window.homeNetwork = {
  mostrar: (usuario) => {
    location.href = 'views/view1.html';
    //    let dataStorage = JSON.parse(localStorage.getItem("key"));
    //  console.log(dataStorage);

    // print1(dataStorage);
  }
};

let publicarBtn = document.getElementById('publicar-btn');
publicarBtn.addEventListener('click', event1=>{
  console.log('diste un click');
  // publicacion = document.getElementById('input-publicacion').value;
  // localStorage.setItem('key', JSON.stringify(publicacion));
});


