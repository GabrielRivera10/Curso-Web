//declaro un arreglo
const habilidades = new Array ();

//creo una clase de campeon
class campeon{
    constructor(nombre, vida, mana, ataque){
        this.nombre=nombre;
        this.vida=vida;
        this.mana=mana;
        this.ataque=ataque;
    };
}
//tres puntitos para decir que no se sabe el tamaño

//extiendo una clase de tanque derivada de carcteristicas de campeon
class tanque extends campeon{
    constructor(nombre, vida, mana, ataque, armadura, ...habilidades){
        super(nombre, vida, mana, ataque);
        this.armadura = armadura;
        this.habilidades = habilidades;
        this.ganaA1= 'mago';
        this.ganaA2= 'asesino';
        this.vida = ((this.vida * 24) / 100) + this.vida;
    };

    presentar(){
        console.log('Hola gamer, juguemos League of Leagens, supongamos que te gusta ' + this.nombre + 'sí te gusta, ' + this.nombre + '.');
        console.log('Sus estadisticas son; vida: ' + this.vida + ', maná: ' + this.mana + ', ataque' + this.ataque, '.');
        console.log('Y mis habilidades son: ');
        for(var habilidad of this.habilidades){
            console.log(habilidad);
        }
    };
    comparar(nombre){
        if(nombre instanceof mago == true || nombre instanceof asesino == true){
            console.log('Tu personaje tiene ventaja y puede ganar con facilidad.');
        }
        if(nombre instanceof tirador == true || nombre instanceof luchador == true){
            console.log('Tu personaje esta en desventaja y puede perder con facilidad.');
        }
        if(nombre instanceof tanque == true){
            console.log('Los dos pueden ganar, pero si juegas con las manos le ganaras.');
        }
    };

}


//extiendo la clase de campeon para hacer una subclase de luchador

class luchador extends campeon{
    constructor(nombre, vida, mana, ataque, movilidad, ...habilidades){
        super(nombre, vida, mana, ataque);
        this.movilidad = movilidad;
        this.habilidades = habilidades;
        this.ganaA1= 'tanque';
        this.ganaA2= 'asesino';
        this.vida = ((this.vida * 15) / 100) + this.vida;
        this.ataque = ((this.ataque * 15) / 100) + this.ataque;
    };

    presentar(){
        console.log('Hola gamer, juguemos League of Leagens, supongamos que te gusta ' + this.nombre + 'sí te gusta, ' + this.nombre + '.');
        console.log('Sus estadisticas son; vida: ' + this.vida + ', maná: ' + this.mana + ', ataque' + this.ataque, '.');
        console.log('Y mis habilidades son: ');
        for(var habilidad of this.habilidades){
            console.log(habilidad);
        }
    };
    comparar(nombre){
        if(nombre instanceof tanque == true || nombre instanceof asesino == true){
            console.log('Tu personaje tiene ventaja y puede ganar con facilidad.');
        }
        if(nombre instanceof tirador == true || nombre instanceof mago == true){
            console.log('Tu personaje esta en desventaja y puede perder con facilidad.');
        }
        if(nombre instanceof luchador == true){
            console.log('Los dos pueden ganar, pero si juegas con las manos le ganaras.');
        }
    }
}

//extiendo la clase de campeon para hacer una subclase de tirador
class tirador extends campeon{
    constructor(nombre, vida, mana, ataque, movilidad, ...habilidades){
        super(nombre, vida, mana, ataque);
        this.movilidad = movilidad;
        this.habilidades = habilidades;
        this.ganaA1= 'tanque';
        this.ganaA2= 'luchador';
        this.vida = ((this.vida * 15) / 100) + this.vida;
        this.ataque = ((this.ataque * 15) / 100) + this.ataque;
    };

    presentar(){
        console.log('Hola gamer, juguemos League of Leagens, supongamos que te gusta ' + this.nombre + 'sí te gusta, ' + this.nombre + '.');
        console.log('Sus estadisticas son; vida: ' + this.vida + ', maná: ' + this.mana + ', ataque' + this.ataque, '.');
        console.log('Y mis habilidades son: ');
        for(var habilidad of this.habilidades){
            console.log(habilidad);
        }
    };
    comparar(nombre){
        if(nombre instanceof tanque == true || nombre instanceof luchador == true){
            console.log('Tu personaje tiene ventaja y puede ganar con facilidad.');
        }
        if(nombre instanceof asesino == true || nombre instanceof mago == true){
            console.log('Tu personaje esta en desventaja y puede perder con facilidad.');
        }
        if(nombre instanceof tirador == true){
            console.log('Los dos pueden ganar, pero si juegas con las manos le ganaras.');
        }
    };
}

//extiendo la clase de campeon para hacer una subclase de mago

class mago extends campeon{
    constructor(nombre, vida, mana, ataque, distancia, ...habilidades){
        super(nombre, vida, mana, ataque);
        this.distancia = distancia;
        this.habilidades = habilidades;
        this.ganaA1= 'tirador';
        this.ganaA2= 'luchador';
        this.mana = ((this.mana * 24) / 100) + this.mana;
    };

    presentar(){
        console.log('Hola gamer, juguemos League of Leagens, supongamos que te gusta ' + this.nombre + 'sí te gusta, ' + this.nombre + '.');
        console.log('Sus estadisticas son; vida: ' + this.vida + ', maná: ' + this.mana + ', ataque' + this.ataque, '.');
        console.log('Y mis habilidades son: ');
        for(var habilidad of this.habilidades){
            console.log(habilidad);
        }
    };
    comparar(nombre){
        if(nombre instanceof tirador == true || nombre instanceof luchador == true){
            console.log('Tu personaje tiene ventaja y puede ganar con facilidad.');
        }
        if(nombre instanceof asesino == true || nombre instanceof tanque == true){
            console.log('Tu personaje esta en desventaja y puede perder con facilidad.');
        }
        if(nombre instanceof mago == true){
            console.log('Los dos pueden ganar, pero si juegas con las manos le ganaras.');
        }
    };
}

//extiendo la clase de campeon para hacer una subclase de asesino

class asesino extends campeon{
    constructor(nombre, vida, mana, ataque, ...habilidades){
        super(nombre, vida, mana, ataque);
        this.habilidades = habilidades;
        this.ganaA1= 'tirador';
        this.ganaA2= 'mago';
        this.vida = ((this.vida * 5) / 100) + this.vida;
        this.ataque = ((this.ataque * 30) / 100) + this.ataque;
    };

    presentar(){
        console.log('Hola gamer, juguemos League of Leagens, supongamos que te gusta ' + this.nombre + 'sí te gusta, ' + this.nombre + '.');
        console.log('Sus estadisticas son; vida: ' + this.vida + ', maná: ' + this.mana + ', ataque' + this.ataque, '.');
        console.log('Y mis habilidades son: ');
        for(var habilidad of this.habilidades){
            console.log(habilidad);
        }
    };
    comparar(nombre){
        if(nombre instanceof tirador == true || nombre instanceof mago == true){
            console.log('Tu personaje tiene ventaja y puede ganar con facilidad.');
        }
        if(nombre instanceof luchador == true || nombre instanceof tanque == true){
            console.log('Tu personaje esta en desventaja y puede perder con facilidad.');
        }
        if(nombre instanceof asesino == true){
            console.log('Los dos pueden ganar, pero si juegas con las manos le ganaras.');
        }
    };
}

//Creo a los personajes
//tanque
const Garen = new tanque('Garen', 620, 0, 66, 36, 'Golpe Decisivo', 'Coraje', 'Juicio', 'Justicia Demaciana');

//luchador
const RekSai = new luchador('RekSai', 570, 0, 64, 335, 'Ira de la Reina', 'Excavar/Emerger', 'Mordedura Feroz/Túnel', 'Impulso de Vacío');

//tirador
const Quinn= new tirador('Quinn', 533, 268, 59, 335, 'Ataque Cegador', 'Sentidos Aguzados', 'Asalto', 'Detrás de las Lineas Enemigas');

//mago
const lux = new mago('Lux', 490, 480, 54, 550, 'Hechizo Luminoso', 'Barrera Prismática', 'Singularidad Brillante', 'Chispa Final');

//asesino
const MaestroYi = new asesino('MaestroYi', 599, 250, 66, 'Golpe Alfa', 'Meditación', 'Estilo Wuju', 'Imparable');