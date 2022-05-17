const mater = document.getElementById("mater");
const otra = document.getElementById("otra");
const agregar = document.getElementById("agregar");
const input = document.getElementById("tareaN");
const lista = document.getElementById("lista");
const borrar = document.getElementsByClassName("borrar");
const hecha = document.getElementsByClassName("hecha");
let materia = ['Matemáticas', 'Química', 'Biología', 'Espagnhul'];

agregar.addEventListener("click", (evento) => {
    if(otra.value !== ''){
        console.log(otra.value);
        let justo = false;
        while(justo != true){
            for(let revisar of materia){
                if(otra === revisar){
                    justo = false;
                }else{
                    justo = true;
                }
            }
        }
        if(justo == true){
            mater.innerHTML += '<option value= "' + otra.value + '">' + otra.value + '</option>';//se sigue agregando pero lo arreglare 
            lista.innerHTML += '<div class="disMat">' + otra.value + '</div><div class="disTar"> ' + tareaN.value + '</div><button class="borrar">Borrar</button><button class="hecha">Hecha</button>'; 
            materia.push(otra.value);
            console.log(materia);
        }
    }
    else{
        lista.innerHTML += '<div><div class="disMat">' + mater.value + '  </div><div class="disTar">' + tareaN.value + '</div><button class="borrar">Borrar</button><button class="hecha">Hecha</button></div><br>'; 
    }
});

lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'borrar'){
        evento.target.parentElement.outerHTML = '';    
    }
    evento.stopPropagation();
    
});