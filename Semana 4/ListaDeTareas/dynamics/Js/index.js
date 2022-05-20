const mater = document.getElementById("mater");
const otra = document.getElementById("otra");
const agregar = document.getElementById("agregar");
const input = document.getElementById("tareaN");
const lista = document.getElementById("lista");
const borrar = document.getElementsByClassName("borrar");
const hecha = document.getElementsByClassName("hecha");
const tareas = document.getElementById("tareas");
const terminada = document.getElementsByClassName("termianda")
const asignacion = document.getElementsByClassName("asignacion");
var faltan=0;
var terminadas=0;

var matBas= ['Matemáticas', 'Químca', 'Biología', 'Espagnhul'];

agregar.addEventListener("click", (evento) => {
    if(input.value != ''){
        let num=0;
        let existe=0;
        if(otra.value !==''){ 
            do{//para esto Aurora, Mia y yo juntamos los cerebros de un ajo y de dos tepos
                if(otra.value == matBas[num])
                    existe=1;
                    num+=1;    
            }while(num<matBas.length)
            if(existe==0){
                mater.innerHTML += '<option value= "' + otra.value + '">' + otra.value + '</option>';
                lista.innerHTML += '<div class="asignacion">' + otra.value + ': ' + tareaN.value + '<button class="hecha">Hecha</button><button class="borrar">Borrar</button></div>'; 
                faltan++;
                tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
                tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
                matBas.push(otra.value);
            }
            else
            lista.innerHTML += '<div class="asignacion">' + otra.value + ': ' + tareaN.value + '<button class="hecha">Hecha</button><button class="borrar">Borrar</button></div>'; 
            otra.value='';
            faltan++;
            tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
            tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
        }
        else{
            lista.innerHTML += '<div class="asignacion">' + mater.value + ': ' + tareaN.value + '<button class="hecha">Hecha</button><button class="borrar">Borrar</button></div>'; 
            faltan++;
            tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
            tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';

        }
    }
    else{
        alert("Agrega una tarea");
    }
    tareaN.value='';
});

lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'borrar'){
        evento.target.parentElement.innerHTML = '';  
        terminadas--;
        faltan--;
        tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
        tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
    }
    if(evento.target.className === 'hecha' || evento.target.className === 'falta'){
        if(evento.target.className == 'hecha'){
            terminadas++;
            tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
            tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
            evento.target.outerHTML = '<button class="falta">Por hacer</button>';
        }
        else{
            terminadas--;
            tareas.innerHTML = '<p>Tareas por hacer: ' + faltan + '.<p>';
            tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
            evento.target.outerHTML = '<button class="hecha">Hecha</button>'
        }
    }
});
