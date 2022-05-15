<?php
 define("DBHOST", "localhost");
 define("DBUSER", "root");
 define("PASSWORD", "");
 define("DB", "casas");

 function connect(){
     $conexion = mysqli_connect(DBHOST, DBUSER, PASSWORD, DB);
     return $conexion;
     if(!$conexion){
        mysqli_error();
        echo "No se puede conectar la base";
    }
 }
?>