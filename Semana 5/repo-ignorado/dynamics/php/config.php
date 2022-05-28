<?php

    define("DBUSER","MikasaAckerman");
    define("DBHOST","localhost");
    define("PASSWORD","cOntraS3guraaA123.");
    define("DB","baseProyectoMuyMuy importante");

    function connect()
    {
        $con=mysqli_connect(DBHOST,DBUSER, PASSWORD, DB);
        
        if(!$con){
            mysqli_connect_error();
            mysqli_connect_errno();
            echo "No se pudo acceder a la base de datos";
        }
        return $con;
    }

?>
