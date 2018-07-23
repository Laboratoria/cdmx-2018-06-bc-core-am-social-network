function sendData () {
    //Guardando valores del input con jQuery
    let name = $('#name').val();
    let place = $('#description').val();
    let cost = $('#cost').val();
    console.log(name, place, cost);
    //Aquí añado mis valores a la base de datos de firebase
    housingRef.push({
        "name": name,
        "description": place,
        "cost": cost
    //Cachando la data con un callback con una función anónima
    }).then(function (response) {
        console.log(response.key);
        //Aquí obtengo valores de la llave DE LA DATABASE en FIREBASE -LHPwidJXrpiC6ln21g5
        alert('Se ha guardado tu información!')
        cleanForm();
    });
};

function cleanForm() {
    let name = $('#name').val('');
    let place = $('#description').val('');
    let cost = $('#cost').val('');

};