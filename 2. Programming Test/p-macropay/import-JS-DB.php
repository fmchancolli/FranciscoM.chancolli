<?php
Class inicial{
  
 function conexion($d1,$d2,$d3,$d4){
    $host='localhost';
    $conexion=array(
   "Database"=>"DBMacropay",
   "UID"=>"sa",
   "PWD"=>"Pancho123",
   "CharacterSet"=>"UTF-8"
);

$con=sqlsrv_connect($host,$conexion);
$aux=implode(",", $d4);
$sql="INSERT INTO [dbo].[pruebaX]
([id]
,[name]
,[phone]
,[addressLines])
VALUES
('$d1','$d2','$d3','$aux')";
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

}


function envia(){

    $json=file_get_contents('fakedatabase.js');
    //print_r($json);
    $data=json_decode($json,true);
    //print_r($data);

    foreach($data as $row)
    {
       // print_r($row);
    $id=$row['id'];
    $name=$row['name'];
    $phone=$row['phone'];
    $addressLines=$row['addressLines'];
    //echo($id .'<br/>');
  
    inicial::conexion($id,$name,$phone,$addressLines);
    
    }

   
}
envia();
?>