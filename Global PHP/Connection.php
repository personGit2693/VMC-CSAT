<?php
try{
	/*
	$serverAndDb_Details = 'sqlsrv:Server=localhost;Database=service_request';		
	$dbServer_Username = 'sa';
	$dbServer_Pass = '@dm1n1m$';//'root';

	$pdo_connect = new PDO($serverAndDb_Details, $dbServer_Username, $dbServer_Pass);		
	*/

	$vmcCsat_ConString = "mysql:host=localhost;dbname=vmc_csat;";
	$serverUsername = "root";
	$serverPassword = "";

	$vmcCsat_Conn = new PDO($vmcCsat_ConString, $serverUsername, $serverPassword);
}catch(Exception $serviceReqConnEx){
	echo $serviceReqConnEx->getMessage();
}	
?>