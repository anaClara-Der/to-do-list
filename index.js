let fecha = document.querySelector("#fecha"); 
let tareas = document.querySelector(".tarea");
let botonListado = document.querySelector(".boton-listado");
let tareasHacer = document.querySelector(".tareas-hacer-ul");
let tareasGuardar; 
let color = document.querySelector("#color"); //opciones de color para agregar a las notas
 

//Título: Fecha
let fechas = new Date(); 
var dia= new Array(7);
dia[0]="Domingo";
dia[1]="Lunes";
dia[2]="Martes";
dia[3]="Miercoles";
dia[4]="Jueves";
dia[5]="Viernes";
dia[6]="Sabado";
//para el mes
var fechasMes = fechas.getMonth() + 1;
var mesok = (fechasMes < 10) ? '0' + fechasMes : fechasMes;
var mesok=new Array(12);
mesok[0]="Enero";
mesok[1]="Febrero";
mesok[2]="Marzo";
mesok[3]="Abril";
mesok[4]="Mayo";
mesok[5]="Junio";
mesok[6]="Julio";
mesok[7]="Agosto";
mesok[8]="Septiembre";
mesok[9]="Octubre";
mesok[10]="Noviembre";
mesok[11]="Diciembre";
//Fecha de título
fecha.innerHTML = "Hoy es "+ dia[fechas.getDay()] + " " + fechas.getDate() + " de " + mesok[fechas.getMonth()];

// Funcionamiento
botonListado.addEventListener("click", function () {
    tareasGuardar = tareas.value; 
    colores = color.value; 
    tarjetaTareas();
    chequeado();
    eliminar(); 
})
localStorage.removeItem("tarea" , tareasHacer)


//FUNCIONES
//marcar el círculo en verde si se hizo
function chequeado() {
    let check = document.querySelector(".circulo");
    check.classList.add("cursorMano")
    check.addEventListener("click", function () {
        this.classList.toggle("hecho");
    })
}
//Al hacer click en el tachito se borra 
function eliminar (){
    let borrar = document.querySelector(".delete");
    borrar.classList.add("cursorMano")
    borrar.addEventListener("click", function(){
        borrar.parentElement.remove();
    })
}

function tarjetaTareas(){
    if (tareasGuardar) { 
        tareasHacer.insertAdjacentHTML("afterbegin", `<div class="tareasDecoracion"><i class=" circulo far fa-circle "></i> <li> ${tareasGuardar} </li>
        <i class="far fa-trash-alt delete"></i> </div>`);
        document.querySelector(".tareasDecoracion").style.backgroundColor = colores; 
    }
}

