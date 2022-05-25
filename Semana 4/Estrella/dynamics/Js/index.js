var picosObj = document.getElementById("picos");
var picudezObj = document.getElementById("picudez");
var colorObj = document.getElementById("color");
var relleno = document.getElementById("relleno");
const cambios = document.getElementById("cambios");

var rellenar=0;
picos=5;
picudez=10;

window.addEventListener("load", ()=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    const lineaG=100/(picos/10);
    //const lineaG=100-picudez;
    const anguloGrados=360/(picos*2);
    const anguloRadianes = (anguloGrados*Math.PI)/180;
    let angulo = anguloRadianes;
    const xInicial = 500/2;
    const yInicial = 100;
    let xNueva = xInicial;
    let yNueva = yInicial;
    console.log(xInicial, yInicial);
    //peque
    const lineaP=picudez/(picos/5);
    const xini = 250+(picudez/picos);
    const yini = 300-(picos*picudez/10);
    console.log(xini, yini);
    let xn = xini;
    let yn = yini;
    ctx.moveTo(xInicial, yInicial);
    for(let i=0; i<picos; i++){
    ctx.moveTo(xNueva, yNueva);
    var despX = lineaG * Math.cos(angulo);
    var despY = lineaG * Math.sin(angulo);
    xNueva +=despX;
    yNueva +=despY;
    angulo += anguloRadianes;
    ctx.lineTo(xn, yn);
    despX = lineaP * Math.cos(angulo);
    despY = lineaP * Math.sin(angulo);
    xn +=despX;
    yn +=despY;
    angulo += anguloRadianes;
    ctx.lineTo(xNueva, yNueva);
    }
    ctx.stroke();
    ctx.closePath();
})


picosObj.addEventListener("change", ()=>{
    picos = picosObj.value;
    console.log(picos);
});
picudezObj.addEventListener("change", ()=>{
    picudez = picudezObj.value;
    console.log(picudez);
});
colorObj.addEventListener("change", ()=>{
    color = colorObj.value;
    console.log(color);
});
relleno.addEventListener("change", ()=>{
    if(rellenar==0){
        rellenar=1;
    }
    else{
        rellenar=0;
    }
});

cambios.addEventListener("change", ()=>{
    if(rellenar==0){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, 500, 600);
        ctx.strokeStyle = color;
        const lineaG=100/(picos/10);
        //const lineaG=100-picudez;
        const anguloGrados=360/(picos*2);
        const anguloRadianes = (anguloGrados*Math.PI)/180;
        let angulo = anguloRadianes;
        const xInicial = 500/2;
        const yInicial = 100;
        let xNueva = xInicial;
        let yNueva = yInicial;
        console.log(xInicial, yInicial);
        //peque
        const lineaP=picudez/(picos/5);
        const xini = 250+(picudez/picos);
        const yini = 300-(picos*picudez/10);
        console.log(xini, yini);
        let xn = xini;
        let yn = yini;
        ctx.moveTo(xInicial, yInicial);
        for(let i=0; i<=picos; i++){
        ctx.moveTo(xNueva, yNueva);
        var despX = lineaG * Math.cos(angulo);
        var despY = lineaG * Math.sin(angulo);
        xNueva +=despX;
        yNueva +=despY;
        angulo += anguloRadianes;
        ctx.lineTo(xn, yn);
        despX = lineaP * Math.cos(angulo);
        despY = lineaP * Math.sin(angulo);
        xn +=despX;
        yn +=despY;
        angulo += anguloRadianes;
        ctx.lineTo(xNueva, yNueva);
        }
        ctx.stroke();
        ctx.closePath();
    }else{
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, 500, 600);
        ctx.strokeStyle = color;
        const lineaG=100/(picos/10);
        //const lineaG=100-picudez;
        const anguloGrados=360/(picos*2);
        const anguloRadianes = (anguloGrados*Math.PI)/180;
        let angulo = anguloRadianes;
        const xInicial = 500/2;
        const yInicial = 100;
        let xNueva = xInicial;
        let yNueva = yInicial;
        console.log(xInicial, yInicial);
        //peque
        const lineaP=picudez/(picos/5);
        const xini = 250+(picudez/picos);
        const yini = 300-(picos*picudez/10);
        console.log(xini, yini);
        let xn = xini;
        let yn = yini;
        ctx.moveTo(xInicial, yInicial);
        for(let i=0; i<=picos; i++){
        ctx.moveTo(xNueva, yNueva);
        var despX = lineaG * Math.cos(angulo);
        var despY = lineaG * Math.sin(angulo);
        xNueva +=despX;
        yNueva +=despY;
        angulo += anguloRadianes;
        ctx.lineTo(xn, yn);
        despX = lineaP * Math.cos(angulo);
        despY = lineaP * Math.sin(angulo);
        xn +=despX;
        yn +=despY;
        angulo += anguloRadianes;
        ctx.lineTo(xNueva, yNueva);
        }
        ctx.fill()
        ctx.stroke();
        ctx.closePath();
    }
});

    

    
    



    
