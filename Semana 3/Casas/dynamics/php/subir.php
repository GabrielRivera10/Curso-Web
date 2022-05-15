<?php
    $usuario    =(isset($_POST["usuario"]) && $_POST["usuario"] != "") ?$_POST["usuario"] : "no especifico";   

    include("./confi.php");
    $conexion= connect();

    //$verdatos = "SELECT ID_user FROM user";

    //$query2 = mysqli_query($conexion, $verdatos);

    $verificar = "SELECT ID_user FROM user WHERE ID_user='$usuario'";

    $query = mysqli_query($conexion, $verificar);

    $verificar = mysqli_fetch_array($query, MYSQLI_NUM);

    
    if($verificar != null)
    echo "existe";    
    //header("location:./dynamics/subir.php");
    else{
        echo "
            <form action='../../templates/registro.html'>
                <field>
                    <h1>Esa cuenta no existe, favor de crear una nueva.<h1/>
                    </br>
                    <button type='submit'>Registrarse</button>
                </field>
                <h2>Si la cuenta ya existe intente de nuevo</h2>
                <a href='..\..\index.html'>Iniciar sesion</a>
            </form>
            ";
        //header("location: ..\..\index.html");
    }

?>