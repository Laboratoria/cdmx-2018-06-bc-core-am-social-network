document.getElementById('postingPost').addEventListener('click', (event) => {
    event.preventDefault();
    const post = document.getElementById('writingPost').value;
    const postBodyPost = 
     ` <div class="row">
            <div class="col-xs-3 col-sm-2">
                <a href="personal-profile.html" title="Profile">
                    <img src=https://image.ibb.co/fe1J1y/icono_del_usuario_46707697.jpg alt="User name" class="img-circle img-user">
                </a>
            </div>
            <div class="col-xs-9 col-sm-10 info-user">
                <h3> <a href="personal-profile.html" title="Profile">My User</a> </h3>
                <p> <i>2h</i> </p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 data-post">
                <p id="postHere"></p>
            <div class="reaction"> &#x2764; 0 </div>
            </div>
            <div class="comments" id="commentArea">
            </div>
        </div>`

    const postBodyComment = 
            `<form>
                <input type="text" class="form-control" id="comentario" placeholder="Escribe un comentario">
                <button id="comentar" class="btn btn-info"> Comentar </button>
            </form>
            <ul id= "hereComment">
            </ul>`

     const drawBodyPost = document.getElementById('first-Post').innerHTML= postBodyPost;
     const drawPost = document.getElementById('postHere').innerHTML= post;
     const drawCommentArea = document.getElementById('commentArea').innerHTML= postBodyComment;
     const getComment = document.getElementById('comentario')

     document.getElementById('comentar').addEventListener('click', (event) => {
        event.preventDefault();
     const containerComment = `<li id> <b>User1</b> <p id ="coment1"> </p> </li> `;
     const getingComment = getComment.value
     const drawComment = document.getElementById('coment1').innerHTML= getingComment;
     const writeComment = document.getElementById('hereComment').innerHTML= drawComment;
     console.log(getingComment);
    

     })
     
});