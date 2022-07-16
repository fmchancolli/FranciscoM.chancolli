<?php
//prueba 2 insert
//c--onexion
$host='localhost';
$conexion=array(
    "Database"=>"DBMacropay",
    "UID"=>"sa",
    "PWD"=>"Pancho123",
    "CharacterSet"=>"UTF-8"
);

$con=sqlsrv_connect($host,$conexion);
if($con){
 
    echo "Conexión establecida.<br />";

} 
else{echo "Conexión no se pudo establecer.<br />";   
       die( print_r( sqlsrv_errors(), true));
    }
  //--fin conexion

aver();

function aver(){
    $host='localhost';
     $conexion=array(
    "Database"=>"DBMacropay",
    "UID"=>"sa",
    "PWD"=>"Pancho123",
    "CharacterSet"=>"UTF-8"
);
    $con=sqlsrv_connect($host,$conexion);


    $sql = "SELECT name FROM [dbo].[pruebaX]";
    $params = array();
    $options =  array( "Scrollable" => SQLSRV_CURSOR_KEYSET);
    $stmt = sqlsrv_query( $con, $sql, $params, $options );
    $row_count = sqlsrv_num_rows( $stmt );
    
    if ($row_count === false)
    echo "Error al obtener datos.";
    else
    echo "bien<br/>";
    echo $row_count;
    
    while( $row = sqlsrv_fetch_array( $stmt) ) {
       print json_encode($row);
    }

 
    sqlsrv_close($con);
}



  
   
     
           

/*
if($con){echo 'conexion exitosa';} 
else{echo 'error';}*/
?>