var tiempo= document.getElementById("tiempo");
var agregar= document.getElementById("agregar");
const cerrar = document.getElementById("cerrar");
const aceptar = document.getElementById("aceptar");
const start = document.getElementById("start");
const pause = document.getElementById("stop");
const reloj = document.getElementById("reloj");
var min = document.getElementById("min");
var seg = document.getElementById("seg");
const alerta = new Audio("./statics/media/audio/inicio-xbox-360-slim.mp3");
let temporizador1;
let transcurrido;

function alert(){
    alerta.play();
};

var tempMin=0;
var tempSeg=0;
var time;
var SegRestantes;
var MinRestantes;
var restante;
var pasado=0;


tiempo.addEventListener("click", ()=>{
    agregar.style.display="block";
});

cerrar.addEventListener("click", ()=>{
    agregar.style.display="none";
    min.value='';
    seg.value='';
});

aceptar.addEventListener("click", ()=>{
    tempMin=min.value;
    tempSeg=seg.value;
    if(tempSeg > 59){
        tempSeg=59;
    }
    else if(tempSeg < 0 || tempSeg==''){
        tempSeg=0;
    }
    if(tempMin > 59){
        tempMin=59;
    }
    else if(tempMin < 0 || tempMin==''){
        tempMin=0;
    }
    //SegRestantes=tempSeg;
    //MinRestantes=tempMin;
    agregar.style.display="none"
    reloj.innerHTML=tempMin+":"+tempSeg;
});

start.addEventListener("click", ()=>{
    // if(){
    //     alert("No ingreso ningun tiempo");
    // }
    // else if(tempMin== '' && tempSeg== ''){
    //     alert("No ingreso ningun tiempo");
    // }


    // if(tempMin>0){
    //     tempMin=tempMin*60;
    //     console.log(tempMin);
    // }


    //time=(SegRestantes+SegRestantes)*1000;
    //restante=time/1000;
    temporizador1 = setTimeout(()=>{
        alert();
        tempMin=0;
        tempSeg=0;
        reloj.innerHTML=tempMin+":"+tempSeg;
        clearInterval(transcurrido);
    }, ((tempMin*60)+tempSeg)*1000);
    transcurrido=setInterval(()=>{
        if(tempSeg==0 && tempMin>0){
            tempMin-=1;
            tempSeg=60;
        }
        tempSeg-=1;
        reloj.innerHTML=tempMin+":"+tempSeg;
    }, 1000);
});


pause.addEventListener("click", ()=>{
    clearTimeout(temporizador1);
    clearInterval(transcurrido);
});

//const timeAlert = ()