//login
let provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    //console.log(result.user);
    guardaDatos(result.user);
    $('#login').hide();
    });
});


var providerf = new firebase.auth.FacebookAuthProvider();
$('#face').click(function(){
  firebase.auth()
  .signInWithPopup(providerf)
  .then(function(result) {
    //console.log(result.user);
    guardaDatos(result.user);
    $('#face').hide();
    $('#root').append("<img src='"+result.user.photoURL+"'/>")
  });
});

var providerg = new firebase.auth.GithubAuthProvider();
$('#gith').click(function(){
  firebase.auth()
  .signInWithPopup(providerg)
  .then(function(result) {
    //console.log(result.user);
    /*guardaDatos(result.user);
    $('#face').hide();
    $('#root').append("<img src='"+result.user.photoURL+"'/>")*/
  });
});





//esta funcion guarda datos automaticamente
function guardaDatos(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("runeat/" +user.uid)
  .set(usuario)
}

//leyendo de la BD
firebase.database().ref("runeat")
.on("child_added", function(s){
  let user = s.val();
 $('#root').append("<img src='"+user.foto+"'/>")
})
const Siguiente = () => {
location.href = ('views/wall.html');
}
