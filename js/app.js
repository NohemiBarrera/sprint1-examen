var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    var lista=agregarEstudiante;
    return lista;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
var cantidadEst = prompt("Ingresa el número de estudiantes:");
var estudiantes=[];

for(var i = 0; i<cantidadEst;i++){
    var agregarNombre = prompt("Ingresa el nombre del estudiante:");
    var agregarTecnicos = prompt("Ingresa los puntos técnicos:");
    var agregarHse = prompt("Ingresa los puntos de HSE:");

    var estudiante = {}
    estudiante.nombre = agregarNombre;
    estudiante.tecnicos = agregarTecnicos;
    estudiante.hse = agregarHse;
    estudiantes.push(estudiante);

}

}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var estudiante=[];
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
    return estudiante;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
var estudiantes=[];
for(var i = 0; i < estudiantes.length; i++){
    document.write("Nombre: " + estudiante.nombre[i] + "<br/>" + "Puntos técnicos: " + estudiante.puntosTecnicos[i] + "<br/>" + "Puntos HSE: " + estudiante.puntosHse);
}    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var estudiante=[];
    var contador;
    var encontrado = -1;
    for(contador=0;contador<estudiante.length; contador++){
        if(estudiante[contador] == estudiante.nombre){
            encontrado = contador;
            break;
        }
        if (encontrado == -1){
            alert("No se encuentra el nombre");
        }
    }
}   

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
var estudiantes=[];
estudiantes.sort();
    function ordenar(puntosTecnicos){
        return puntosTecnicos - puntosTecnicos[i+1];
    }
var estudiante=[];
var puntajesTec=[estudiante.puntajesTec];
puntajesTec.sort(ordenar);

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
var estudiantes=[];
var largo=estudiantes.length;
var puntajesOrd = largo;
var temporal=0;

for(var i = 0; i<largo; i++){
    for(var j = 0; i < puntajesTec; j++){
        if(estudiantes[indice] > estudiantes[j+1]){
            temporal = estudiantes[j];
            estudiantes[j] = estudiantes[j+1];
            estudiantes[j+1] = temporal;
        }
    }
}
return topHSE;
}