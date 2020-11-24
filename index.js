const fecha = document.querySelector("#fecha"); 
let texterea = document.querySelector("#texterea");
let botonListado = document.querySelector(".boton-listado");
const form = document.getElementById("listado");
let tareasHacerUl = document.querySelector(".tareas-hacer-ul");
let hacerTareas = []
let arrayDeTareas = []
let color = document.querySelector("#color"); //opciones de color para agregar a las notas
const template = document.getElementById("tareas-template").content;
const fragmen = document.createDocumentFragment();
 



// Funcionamiento
form.addEventListener("submit", (e) => {
    e.preventDefault();
    tarjetaTareas();
   
})

//Las tareas escritas se pasan al otro div
function tarjetaTareas(){
    hacerTareas = []
    if (texterea.value) {
        hacerTareas.push(texterea.value);
        arrayDeTareas.push(texterea.value);
        hacerTareas.forEach(item => {
            const clone = template.cloneNode(true);
            clone.querySelector("p").textContent = item;
            clone.querySelector(".tareasDecoracion").style.backgroundColor = color.value;
            clone.querySelector(".circulo").addEventListener("click", function (){
                this.classList.toggle("hecho")
            })
            clone.querySelector(".borrar").addEventListener("click", function(){
                this.parentElement.remove()
            })
            fragmen.appendChild(clone);
        })
        tareasHacerUl.appendChild(fragmen);
    }
    form.reset()
}


//FECHA 
function tituloFecha () {
    const fechas = new Date();
    const dias = ["Domingo" , "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; 
    const meses = ["Enero" , "Febrero" , "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
    return fecha.innerHTML = "Hoy es "+ dias[fechas.getDay()] + " " + fechas.getDate() + " de " + meses[fechas.getMonth()];
}

tituloFecha();


/*
//FUNCIONES
//marcar el círculo en verde si se hizo
function chequeado() {
    let check = document.querySelector(".circulo");
    check.addEventListener("click", function () {
        this.classList.toggle("hecho");
    })
}
//Al hacer click en el tachito se borra 
function eliminar (){
    let borrar = document.querySelector(".delete");
    borrar.addEventListener("click", function(){
        borrar.parentElement.remove();
    })
}
*/