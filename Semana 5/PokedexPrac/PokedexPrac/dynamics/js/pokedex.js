window.addEventListener("load", ()=>{
  //COOKIE
  var ultimo;
  var cookieRica;
  let cookie_pok;
  //Objetos
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");
  const nombre = document.getElementById("nombre");
  const verificar = document.getElementById("verificar");
  const altura = document.getElementById("altura");
  const verAlt = document.getElementById("verAlt");
  const peso = document.getElementById("peso");
  const verPeso = document.getElementById("verPeso");
  const exp_base = document.getElementById("exp_base");
  const verExp = document.getElementById("verExp");
  const divActualiza = document.getElementById("contenedor-actualizar");
  const btnGuardar = document.getElementById("btn-cambios");

  //ultimo pokemon
  //alert(document.cookie);
  
  let cookie_pok_id = document.cookie.split('=');
  // console.log(cookie_pok_id[1]);

  fetch("dynamics/php/pokemon.php?id="+cookie_pok_id[1])
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      if(datosJSON.ok == true){
        divDatos.innerHTML="<button data-id='" +cookie_pok_id[1]+ "'id='btn-actualizar'>Actualizar datos</button>";
        divDatos.innerHTML+="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre +"</div>";
        divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura +"</div>";
        divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso +"</div>";
        divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo +"</div>";
        divDatos.innerHTML+="<button data-id='" +cookie_pok_id[1]+ "'id='btn-eliminar'>Eliminar Pokemon</button>";
        divDatos.style.display = "flex";
        divActualiza.style.display="none";
        divAgregar.style.display="none";
      }
    });

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
      divDatos.style.display = "none";
      divActualiza.style.display="none";
  });

  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";
    evento.preventDefault();
    let datosForm = new FormData(formNuevo);
    fetch("dynamics/php/crear_pokemon.php", {
      method:"POST",
      body: datosForm,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{
      if(datosJSON.ok == true){
        alert("Todo bien");
      }else{
        alert(datosJSON.texto);
      }
    })
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });
  
  nombre.addEventListener("keyup", (evento) =>{
    let termino = nombre.value;
    verificar.innerHTML='';

    fetch("./dynamics/php/pokemon.php?q="+termino)
      .then((response)=>{
        return response.json();
      }).then((datosJSON) => {
        console.log(datosJSON);
        for(nuevoPok of datosJSON){
          if(nuevoPok.pok_name == termino){
            console.log("existe");
            verificar.innerHTML="Ya existe";
          }
        }
      });
  });

  altura.addEventListener("keyup", ()=>{
    verAlt.innerHTML='';
    if(altura.value < 0)
      verAlt.innerHTML="Ingresa un numero positivo";
  });

  peso.addEventListener("keyup", ()=>{
    verPeso.innerHTML='';
    if(peso.value < 0)
      verPeso.innerHTML="Ingresa un numero positivo";
  });

  exp_base.addEventListener("keyup", ()=>{
    verExp.innerHTML='';
    let tecla = exp_base.value;
    let array = tecla.split('');
    for(caracter of array){
      if(caracter == '.')
      verExp.innerHTML="Ingresa un numero entero";
    }
    
  });



  buscador.addEventListener("keyup", (evento) => {
    let termino = buscador.value;
    divResultados.innerHTML='';
    
    if(termino.length >= 3){
    fetch("./dynamics/php/pokemon.php?q="+termino)
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON) =>{
        //mostrar datos
        console.log(datosJSON);
        for(pokemon of datosJSON){
          let div = document.createElement("div");
          div.innerHTML = pokemon.pok_name;
          div.dataset.id = pokemon.pok_id;
          div.classList.add("coincidencia");
          divResultados.appendChild(div);
        }

      });
    }
  });

  divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;
      document.cookie = "pokemon="+ id +"; max-age=3600000";
      cookie_pok = document.cookie;
      console.log(cookie_pok);
      fetch("dynamics/php/pokemon.php?id="+id)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<button data-id='" +id+ "'id='btn-actualizar'>Actualizar datos</button>";
            divDatos.innerHTML+="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo +"</div>";
            divDatos.innerHTML+="<button data-id='" +id+ "'id='btn-eliminar'>Eliminar Pokemon</button>";
            divDatos.style.display = "flex";
            divActualiza.style.display="none";
            divAgregar.style.display="none";
          }
        });
    }
  });


  fetch("dynamics/php/tipos.php")
  .then((response)=>{
    return response.json();
  })
  .then((datosJSON)=>{
    console.log(datosJSON);
    let selectTipos = document.getElementById("tipo-nuevo");
    for(tipo of datosJSON){
      selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
    }
  });

  divDatos.addEventListener("click", (evento)=>{
    if(evento.target.id == "btn-eliminar"){
      let datosForm = new FormData();
      datosForm.append("id", evento.target.dataset.id);
      fetch("dynamics/php/borrar_pokemon.php",{
        method:"POST",
        body: datosForm,
      }).then((response)=>{
        return response.json();
      }).then((datosJSON)=>{
        if(datosJSON.ok == true){
          alert("Se elimino el pokemon");
          divDatos.innerHTML='';
        }
        else
          alert("No se pudo eliminar");
      });
    }
    if(evento.target.id=="btn-actualizar"){
      divActualiza.style.display = "block";
      divDatos.style.display = "none";
      btnGuardar.dataid=evento.target.dataset.id;
    }
  });
  
  btnGuardar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    let datosForm = new FormData(formNuevo);
    datosForm.append("id", cookie_pok_id[1]);
    fetch("dynamics/php/actualiza_pok.php", {
      method:"POST",
      body: datosForm,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{
      if(datosJSON.ok == true){
        alert("Todo bien");
        divDatos.innerHTML="<button data-id='" +id+ "'id='btn-actualizar'>Actualizar datos</button>";
          divDatos.innerHTML+="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre +"</div>";
          divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura +"</div>";
          divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso +"</div>";
          divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo +"</div>";
          divDatos.innerHTML+="<button data-id='" +id+ "'id='btn-eliminar'>Eliminar Pokemon</button>";
          divDatos.style.display = "flex";
          divActualiza.style.display="none";
          divAgregar.style.display="none";
          divActualiza.style.display = "none";
      }else{
        alert(datosJSON.texto);
      }
    })
  });
  //btnGuardar.addEventListener("click", (evento)=>{
    
  //});
  
});