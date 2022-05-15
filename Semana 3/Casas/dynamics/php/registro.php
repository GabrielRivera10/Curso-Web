<?php
    /*echo "<table border=1 cellpadding=25px>
        <thead>
            <tr>
                <th colspan='3'><h1>$usuario</h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><br><br>$usuario
                <td><br><br>$nombre
                <td><br><br>$casa
            </tr>
        </tbody>
    </table>";*/

    include("./confi.php");
    $conexion= connect();
    //var_dump($conexion);

    $usuario    =(isset($_POST["usuario"]) && $_POST["usuario"] != "") ?$_POST["usuario"] : "no especifico";
    $nombre     =(isset($_POST["nombre"]) && $_POST["nombre"] != "") ?$_POST["nombre"] : "no especifico";
    $casa       =(isset($_POST["casa"]) && $_POST["casa"] != "") ?$_POST["casa"] : "no especifico";

    $peticion = "INSERT INTO user VALUES ('$usuario', '$nombre', '$casa')";
    $verdatos = "SELECT * FROM user";


    $query = mysqli_query($conexion, $peticion);
    $query2 = mysqli_query($conexion, $verdatos);

    $datos = mysqli_fetch_array($query2, MYSQLI_NUM);

    var_dump($query);
    echo "<br/>";
    var_dump($datos);


?>