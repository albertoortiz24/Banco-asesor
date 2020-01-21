$("#formulario").submit(function (e) {
    e.preventDefault();
    correcto();
    enviado();
});


function enviado() {
    var datos = $("#formulario").serialize(); //Toma los datosy los lleva a un arreglo
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSde3O_cPijW3-nhiwkQyzZt4gzT9Rya5iEWMxgD3_pejOJJmQ/formResponse",
        data: datos,
        success: function () {
            if (this.status == 200) {
                console.log("Logrado");
            }
        }

    });
    
}

$("#cancelled").click(function () {
    document.getElementById("formulario").reset();
});


function correcto() {
    $("#mensajeExito").removeClass("d-none");
    // Redireccionar
    setTimeout(() => {
        document.getElementById("formulario").reset();
        window.location.href = 'sitio4.html';
    }, 4000);
}