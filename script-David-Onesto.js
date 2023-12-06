document.getElementById('formularioContacto').addEventListener('submit',
    function(event){
        event.preventDefault();
        var edad = document.getElementById('edad').value;
        var sexo = document.getElementById('sexo').value;
        var nivelEduca = document.getElementById('nivelEduca').value;
        var ocupacion = document.getElementById('ocupacion').value;
        var url = 'resultado-David-Onesto.html?edad=' +
        encodeURIComponent(edad) + '&sexo='+ 
        encodeURIComponent(sexo) + '&nivelEduca=' + 
        encodeURIComponent(nivelEduca) +'&ocupacion=' + 
        encodeURIComponent(ocupacion);
        window.location.href = url;
    });


    