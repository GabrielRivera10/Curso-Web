<?php
    echo "
    <title>
        subir archivos
        </title>
    <form action='./subirArchivos.php' method='POST' enctype='multipart/form-data'>
    <fieldset>
        <label for='nombre'>
            Nombre
            <input type='text' name='nombre' required>
            <br>
            <input type='file' name='archivo' required>
            <br>
            <input type='submit' value='Subir'>
            <input type='reset' value='Borrar datos'>
        </label>
    </fieldset>
    </form>
    ";
    echo "<form action='./subirArchivos.php'>
        <button type='submit'>
            Cargar
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
        rename($arch,"../../statics/img/$nombre.$ext");
        //echo $ext;
    }
    else
    {
        $carpeta=opendir("../../statics/img");
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
        if($i>=4)
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
                    echo "<img src='../../statics/img/$value'/>";
                }   
            }
        }
        else
        {
            echo "no tienes imagenes";
        }
        closedir($carpeta);
    }
    // tep ajo vac hal ---para distinguir entre las casas
    //nom para distinguir entre usuario
?>