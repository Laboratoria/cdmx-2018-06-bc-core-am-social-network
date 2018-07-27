socialNetwork.initializeFirebase();
let db = firebase.firestore();


const logout = document.getElementById('logout').addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = '../index.html';
});

// const publicar = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
const publishButton = document.getElementById('publish').addEventListener('click', event => {
  event.preventDefault();
  let postDate = `${new Date()}`;
  const contentPost = document.getElementById('publication-content').value;
  db.collection('post').add({
    content: contentPost,
    date: postDate,
    userID: user.uid,
    // likes: 0
  })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('publication-content').value = '';
      // drawPost();
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
});
//     } else {
//       location.href = ('../index.html');
//     }
//   });
// };

function deletePost(id) {
  db.collection('post').doc(id).delete().then(function() {
    console.log('Document successfully deleted!');
  }).catch(function(error) {
    console.error('Error removing document: ', error);
  });
};


// const drawPost = () => {
const postContainer = document.getElementById('publications');
db.collection('post').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    postContainer.innerHTML += `<div class="card text-white bg-info" my-5 px-2>
                                   <div class="card-header" id= "${doc.id}">
                                     <h5> <i class="fas fa-user-circle"></i> ${doc.data().userID}</h5>
                                     <p>${doc.data().date}</p>
                                    </div>
                                    <div class="card-body">
                                      <h6 class="card-text">${doc.data().content}</h6>
                                    </div>
                                    <div class="card-footer mr-auto">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                       <button class="btn btn-info  float-right">
                                         <i class="fas fa-heart"></i> 0
                                       </button>
                                       <button class="btn btn-info float-right">
                                        <i class="fas fa-edit"></i> Editar
                                       </button>
                                       <button class="btn btn-info float-right" onclick ="deletePost('${doc.id}')">
                                        <i class= "fas fa-trash-alt"></i> Eliminar
                                       </button>
                                    </div>
                                   </div>
                                    <div class="card-footer mr-auto">
                                      <input id="comment" type="text"> 
                                      <button class="btn btn-info float-right"><i class="fas fa-comment-alt"></i></button>
                                      </div>
                                </div>
                                <br/>`;
  });
});
// };


// window.onload = publicar;
