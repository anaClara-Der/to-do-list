//Agrupa todas las funciones de la pagina
const accionPagina = () =>{
  tituloFecha();
  //Escribir la tarea
  const form = document.getElementById("listado");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tarjetaTareas();
  });
}

//Las tareas escritas se pasan para que queden escritas
const tarjetaTareas = () =>{
  let hacerTareas = [];
  let textarea = document.querySelector("#textarea");
  let color = document.querySelector("#color"); 
  let tareasHacerUl = document.querySelector(".tareas-hacer-ul");
  const form = document.getElementById("listado");
  const template = document.getElementById("tareas-template").content;
  const fragmen = document.createDocumentFragment();

   if (textarea.value) { //Lee si se ingreso un valor 
     hacerTareas.push(textarea.value);

     hacerTareas.forEach((item) => {
       const clone = template.cloneNode(true);

       clone.querySelector("p").textContent = item; //Se guarda el valor del texto ingresado
       clone.querySelector(".tareasDecoracion").style.backgroundColor = color.value; //Valor del color elegido
       
       clone.querySelector(".circulo").addEventListener("click", function () { //Agrega color verde si se hizo la tarea
         this.classList.toggle("hecho");
       });
       clone.querySelector(".borrar").addEventListener("click", function () {
         this.parentElement.remove(); //Borra la tarea
       });
       
       fragmen.appendChild(clone);
     });
     tareasHacerUl.appendChild(fragmen);
   }
   form.reset();
}

//Fecha cabezera
function tituloFecha() {
  const fecha = document.querySelector("#fecha");
  const fechas = new Date();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return (fecha.innerHTML =
    "Hoy es " +
    dias[fechas.getDay()] +
    " " +
    fechas.getDate() +
    " de " +
    meses[fechas.getMonth()]);
}

accionPagina();