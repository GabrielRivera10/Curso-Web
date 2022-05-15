<?php
    
    $usuario;    =(isset($_POST["usuario"]) && $_POST["usuario"] != "") ?$_POST["usuario"] : "no especifico";   

    include("./confi.php");
    $conexion= connect();

    //$verdatos = "SELECT ID_user FROM user";

    //$query2 = mysqli_query($conexion, $verdatos);

    $verificar = "SELECT ID_user FROM user WHERE ID_user='$usuario'";

    $query = mysqli_query($conexion, $verificar);

    $verificar = mysqli_fetch_array($query, MYSQLI_NUM);

    
    if($verificar != null ){
        echo "
            <title>
                subir archivos
                </title>
            <form action='./avatar.php' method='POST' enctype='multipart/form-data'>
            <fieldset>
                <label for='nombre'>
                    Nombre
                    <input type='text' name='nombre' required>
                    <br>
                    <input type='file' name='archivo' required>
                    <br>
                    <input type='hidden' value='$usuario' name='usuario'>
                    <input type='submit' value='Subir'>
                    <input type='reset' value='Borrar datos'>
                    
                </label>
            </fieldset>
            </form>
            ";
            echo "<form action='./avatar.php' method='POST'>
                <input type='hidden' value='$usuario' name='usuario'>
                <button type='submit'>
                    Cargar
                </button>
                </form>
                ";
            echo "<form action='./subir.php'>
                <input type='hidden' value='$usuario' name='usuario'>    
                <button type='submit'>
                    Galeria
                </button>
                </form>
                ";
            echo "<form action='./planos.php'>
                <input type='hidden' value='$usuario' name='usuario'>
                <button type='submit'>
                    Planos
                </button>
                </form>
                ";
            print_r($_FILES);
            if(isset($_FILES['archivo']))
            {
                $nombre=$_POST['nombre'];
                $name = $_FILES['archivo']['name'];
                $ext = pathinfo($name, PATHINFO_EXTENSION);
                //echo pathinfo($name, PATHINFO_FILENAME). "<br>";
                $arch=$_FILES['archivo']['tmp_name'];
                rename($arch,"../../statics/img/Avatar/$nombre.$ext");
                //echo $ext;
            }
            else
            {
                $carpeta=opendir("../../statics/img/Avatar/");
                $archivos=[];
                $hay_archivos=true;
                $i=0;
                //guardar el nombre de los archivos en un arreglo
                while($hay_archivos)
                {
                    $archivo1=readdir($carpeta);
                    if($archivo1!=false)
                    {
                        $i++;
                        array_push($archivos,$archivo1);
                    }
                    else
                    {
                        $hay_archivos=false;
                    }
                }
                print_r($archivos);
                if($i>=0)
                {
                    echo "<h1> 
                    Estos son mis archivos
                    </h1>"
                    ;
                    //foreach sirve para recorrer arreglos de principio a final
                    foreach($archivos as  $llave => $value)
                    {
                        if($value!="." && $value!="..")
                        {
                            echo "<img src='../../statics/img/Avatar/$value'/>";
                        }   
                    }
                }
                else
                {
                    echo "no tienes imagenes";
                }
                closedir($carpeta);
            }
        }
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
    }
?>