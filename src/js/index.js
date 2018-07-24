//login
let provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    //console.log(result.user);
    guardaDatos(result.user);
    $('#login').hide();
    $('#root').append("<img src='"+result.user.photoURL+"'/>")
  });
});
//esta funcion guarda datos automaticamente
/*function guardaDatos(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("runeat/" +user.uid)
  .set(usuario)
}*/

//leyendo de la BD
firebase.database().ref("runeat")
.on("child_added", function(s){
  var user = s.val();
 $('#root').append("<img src='"+user.foto+"'/>")
})
