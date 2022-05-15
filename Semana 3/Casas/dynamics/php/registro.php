<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boletos vista</title>
</head>
<body>
<?php
$usuario    =(isset($_POST["usuario"]) && $_POST["usuario"] != "") ?$_POST["usuario"] : "no especifico";
$nombre     =(isset($_POST["nombre"]) && $_POST["nombre"] != "") ?$_POST["nombre"] : "no especifico";
$casa       =(isset($_POST["casa"]) && $_POST["casa"] != "") ?$_POST["casa"] : "no especifico";
    echo "<table border=1 cellpadding=25px>
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
    </table>";
    ?>
</body>
</html>