window.social = {
  displayNickname: (name) => {
    console.log(name);
    let nameSend = localStorage.setItem('name', name);
  }
};