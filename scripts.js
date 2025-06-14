document.getElementById("formulario-contacto").addEventListener("submit", function(event){
    event.preventDefault();
    alert("¡Gracias por tu mensaje, " + document.getElementById("nombre").value + "!");
    this.reset();
});
function mostrarSeccion(seccionId) {
    document.getElementById("sobre-mi").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById(seccionId).style.display = "block";
}