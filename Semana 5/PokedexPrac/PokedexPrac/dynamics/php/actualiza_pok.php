<?php
require "config.php";

$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

$id = (isset($_POST["id"]) && $_POST["id"]!= "")?$_POST["id"]:false;
$altura = (isset($_POST["altura-nueva"]) && $_POST["altura-nueva"]!= "")?$_POST["altura-nueva"]:false;
$peso = (isset($_POST["peso-nuevo"]) && $_POST["peso-nuevo"]!= "")?$_POST["peso-nuevo"]:false;
$exp_base = (isset($_POST["exp_base-nueva"]) && $_POST["exp_base-nueva"]!= "")?$_POST["exp_base-nueva"]:false;
$tipo = (isset($_POST["tipo-nuevo"]) && $_POST["tipo-nuevo"]!= "")?$_POST["tipo-nuevo"]:false;

    if($altura!=false){
        $sql = "UPDATE pokemon SET pok_height = $altura WHERE pok_id = $id";
        $res = mysqli_query($con, $sql);
    }
    
    if($peso!=false){
        $sql = "UPDATE pokemon SET pok_height = $peso WHERE pok_id = $id";
        $res = mysqli_query($con, $sql);
    }
    
    if($exp_base!=false){
        $sql = "UPDATE pokemon SET pok_height = $exp_base WHERE pok_id = $id";
        $res = mysqli_query($con, $sql);    
    }


if($res == false){
    $respuesta = array("ok"=>false, "texto" => "No se pudo ingresar");
    echo json_encode($respuesta);
}
else{
    
    $sql = "UPDATE pokemon_types SET type_id = $tipo WHERE pok_id = $id";
    mysqli_query($con, $sql);

    $respuesta = array("ok"=> true, "id"=>$id, "texto" => "Se pudo ingresar");
    echo json_encode($respuesta);
}

?>