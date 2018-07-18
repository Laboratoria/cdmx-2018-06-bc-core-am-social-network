window.onload = charge = () => {
  let userCharged = localStorage.getItem('name');
  console.log(userCharged);
  printName(userCharged);
};

const printName = (userCharged) => {
  let nameToPrint = document.getElementById('user-paragraph');
  let toPrint = `¡Bienvenidx ${userCharged}! Te has logueado exitosamente`;
  nameToPrint.innerHTML = toPrint;
};