let listElements = document.querySelectorAll('.menulista '); //let  se usa para declarar una variable local que se pueda usar solo al bloque seleccionado, QUERYSELECTOR lo que hace es seleccionar los elementos y dentro del paréntesis se llama a la clase de la que pertenecen esos elementos  

//ahora, con el FOR EACH pasará a recorrer todos los elementos
listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('tablero');
        //en el toggle, creamos una clase para que una vez dado click en el menulista, se le asocie una nueva clase del nombre tablero que es lo que al programador le permitirá ver si cambio de estado la visibilidad del menú

        let height = 0; //la altura comienza en 0 ya que no se debe ver

        let menu = listElement.nextElementSibling; //(tomar a la funcion que le sigue  del que esta llamando)

        if (menu.clientHeight == "0") { // si el alto que tiene el menu  actualmente es igual a 0 entonces que la altura sea igual a la altura minima para que se elemento exista 
            height = menu.scrollHeight; //medira el alto minimo de un elemento para que exista y no se desborde
        }

        menu.style.height = height + "px";
    })
});

// Función para validar el formulario antes de enviar
function ValidarEnvio() {
    // Insertamos las variables (obligatorias)
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var mail = document.getElementById("mail").value;
    var pais = document.getElementById("pais").value;
    var telefono = document.getElementById("telefono").value;

    // Ponemos un if para saber si el dato está vacio o lleno
    if (nombre === "" || apellido === "" || mail === "" || pais === "" || telefono === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    } else {
        window.location.href = "/Parcial Concesionaria.html";
        alert("Datos enviados mi loco")
    }
}



