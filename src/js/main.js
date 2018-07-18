window.social = {
  displayNickname: (name) => {
    console.log(name);
    let nameSend = localStorage.setItem('name', name);
  },

  displayPost: (textInPost) => {
    let textSend = localStorage.setItem('text', textInPost);
    printPost();
  }
};