<?php
    require "config.php";

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

    $id = (isset($_POST["id"]) && $_POST["id"]!= "")?$_POST["id"]:false;

    $sql = "DELETE FROM pokemon_types WHERE pok_id = $id";
    mysqli_query($con, $sql);
    
    $sql = "DELETE FROM pokemon WHERE pok_id=$id";
    $res = mysqli_query($con, $sql);

    if($res == true){
        $respuesta = array("ok"=>true);
    }
    else{
        echo mysqli_error($con);  //////AYUDA PARA VER LOS ERRORES/////
        $respuesta=array("ok"=>false);
    }       
    echo json_encode($respuesta);
?>