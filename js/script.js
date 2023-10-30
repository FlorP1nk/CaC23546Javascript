
//--> Funcion para calcular total <--//

function calcularTotal() {

  var categoria = document.getElementById("inputCategory").value;

  var cantidad = document.getElementById("inputCant").value || 0; 

  var descuentos = {
    Estudiante: 0.8, 
    Trainee: 0.5, 
    Junior: 0.15, 
  };

  var valorTicket = 200;

  var total = cantidad * (1 - descuentos[categoria]) * valorTicket;
  total = Math.round(total);

  document.getElementById("inputCeleste").textContent =
    "Total a pagar: $" + total;
}

//--> Eventos para calcular total y resetear el formulario <--//

  document.getElementById("botonSubmit").addEventListener("click", function (e) {
    e.preventDefault(); 
    calcularTotal(); 
  });

  document.getElementById("botonReset").addEventListener("click", function () {
  
  document.getElementById("inputCeleste").textContent = "Total a pagar: $0.00";

});

