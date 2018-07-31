let retu = document.getElementById('retur');
let close2 = document.getElementById('close2');

retu.addEventListener('click', event =>{
  // window.open('view1.html','_self');
  history.go(-1);
 });

close2.addEventListener('click', event => {
  basesData.closeAccount();
  history.go(-2);
});