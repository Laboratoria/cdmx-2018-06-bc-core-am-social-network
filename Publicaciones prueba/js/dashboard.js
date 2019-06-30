// Pintando en interfaz, llamando variable de nuestra base con un marcador "child_added", snapshot puede llamarse x
// El .on es para leer la DB
housingRef.on('child_added', function (snapshot){
    //console.log(snapshot.key, snapshot.val());
    $('.hostings-wrapper').append(`<div class="col-sm-6 col-md-3">
    <div class="panel panel-default location-panel">
        <img src="img/host-covers/location-4.jpg" alt="">
        <h2>${snapshot.val().name}</h2>
        <h3>>${snapshot.val().description}</h3>
        <h4>>${snapshot.val().cost}</h4>
    </div>
</div>
`);
});


