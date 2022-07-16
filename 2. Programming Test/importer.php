
<?php
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
$sql="INSERT INTO P-TABLA('id','name','phone','addressLines') values('$id','$name','$phone','$addressLines');";



}

?>