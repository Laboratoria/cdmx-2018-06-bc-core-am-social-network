window.socialNetwork = {
  initFirebase: () =>{
    firebase.initializeApp({
      apiKey: 'AIzaSyDS37Rs1Whul6hHsf07oWjVH8j2lx-wvD4',
      authDomain: 'socialnetwork-da518.firebaseapp.com',
      databaseURL: 'https://socialnetwork-da518.firebaseio.com',
      projectId: 'socialnetwork-da518',
      storageBucket: 'socialnetwork-da518.appspot.com',
      messagingSenderId: '918214763913'
    });
  },

  // Función para ingreso de usuaro ya registrado con email y contraseña
  loginUser: (email, password) => {
    // función ya dada por firebase para verificar usuario y conraseña
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        // De ser correcta la información de usuario se le enviara a la pagina de news(muro donde estarán los post/comentarios)
        location.href = 'views/newpost.html';
      })
    // Verifica que no contenga un error y de ser así efectua lo siguiente
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // Error por contraseña invalida 
        if (errorCode === 'auth/wrong-password') {
          console.log(errorCode);
          // Manda la siguiente alerta
          alert('Por favor, verifica tu contraseña.');
          // Error por usuario no encontrado, email invalido o algún otro error
        } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error') {
          // Manda la siguiente alerta
          alert('Verifica tu usuario');
        }
      });
  },
                    
  // Ingreso de Usuario con cuenta de Google
  loginWithGoogle: () => {
    // Función predeterminada por firebase
    let provider = new firebase.auth.GoogleAuthProvider();
    // Se conecta a la API DE Google
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // Manda a otra ventana más pequeña para poder acceder por medio de Google
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // Nos proporciona un token de acceso de Google para acceder a la API de Google
        let token = result.credential.accessToken;
        let user = result.user;
        // De ser correcta la información de usuario se le enviara a la pagina de news(muro donde estarán los post/comentarios)
        location.href = 'views/newpost.html';
        console.log(result);
        // Si contiene algun error verificara y mandará lo siguiente
      }).catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        // Error de cuenta existente con otra credencial
        if (errorCode === 'auth/account-exists-with-different-credential') {
          // Mandara la siguiente alerta
          alert('Este correo ya fue registrado, intenta con otro');
        }
      });
  },

  // Ingreso de usuario con Facebook 

  loginWithFacebook: () => {
    // Función predeterminada por firebase para el acceso con Facebook
    let provider = new firebase.auth.FacebookAuthProvider();
    // Manda a otra ventana más pequeña para poder acceder por medio de Google
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        location.href = 'views/newpost.html';
      }).catch(error => { 
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('Este usuario ya fue registrado');
        }
      });
  },

  // Registro de usuario tomando como parametros su email y password
  registerUser: (email, password) => {
    // Función de firebase para crear usuario
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        let user = firebase.auth().currentUser;
        // Mandara un email de verificación de cuenta
        user.sendEmailVerification()
          .then(result => {
            console.log('Correo enviado');
            alert('Ha sido enviado un correo de verificación a tu cuenta');
          });
        // Si ocurre un error efectuara lo siguiente
      }).catch(error =>{
        let errorCode = error.code;
        let errorMessage = error.message;
        // Error es por email invalido 
        if (errorCode === 'auth/invalid-email') {
          // Mandara la sigueinte alerta
          alert('Correo invalido, intentalo nuevamente');
          // Error por parssword
        } else if (errorCode === 'auth/weak-password') {
          // Mandara la siguiente alerta
          alert('Tu contraseña es invalida, debe de contener al menos 6 caracteres');
          // Error por por que el email ya ha sido registrado
        } else if (errorCode === 'auth/email-already-in-use') {
          // Mandara la sigueinte alerta
          alert('Ya existe usuario con esta dirección de correo');
        }
      });
  },


  // Cerrar sesión

  signOut: () => {
    firebase.auth().signOut()
      .then(result =>{
        // Enviara al usuario a la página principal (login 'index.html')
        location.href = ('../index.html');
      }).catch(error =>{
        console.log('Error al cerrar sesión', error);
      });
  }        
};