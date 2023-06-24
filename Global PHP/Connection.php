<?php
try{
	$serverConnection = null;

	$vmcCsat_ConString = "mysql:host=localhost;dbname=vmc_csat;";
	$serverUsername = "root";
	$serverPassword = "";

	$vmcCsat_Conn = new PDO($vmcCsat_ConString, $serverUsername, $serverPassword);
}catch(Exception $serviceReqConnEx){
	$serverConnection = $serviceReqConnEx->getMessage();
}	
?>