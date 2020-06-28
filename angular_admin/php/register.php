<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$companyName = trim($request->companyName);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = 'islam@sda.com';
$sql = "INSERT INTO users(companyName,password,email) VALUES ('islam','asdqwe','{$email}')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'companyName' => $companyName,
'password' => '',
'email' => $email
];
echo json_encode($authdata);

}
}


?>