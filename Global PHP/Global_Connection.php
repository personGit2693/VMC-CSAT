<?php

function connectToDb(string $connectionName){

	/*Prep Response*/
	$connectToDb_Obj = new stdClass();
	$connectToDb_Obj->serverConnection = null;
	$connectToDb_Obj->selectedPdoConn = null;

	$selectedPdoConn = null;
	$serverConnection = null;
	/*Prep Response*/

	try{

		/*Connect to VMC CSAT DB*/
		if($connectionName === "vmc_csat"){
		
			$connString = "mysql:host=localhost;dbname=vmc_csat;";
			$serverUsername = "root";
			$serverPassword = "";		

			$selectedPdoConn = new PDO($connString, $serverUsername, $serverPassword);		
		}
		/*Connect to VMC CSAT DB*/


		/*Return*/
		$connectToDb_Obj->selectedPdoConn = $selectedPdoConn;

		return $connectToDb_Obj;
		/*Return*/
	}catch(Exception $projectName_Conn_Ex){

		$serverConnection = $projectName_Conn_Ex->getMessage();


		/*Return*/
		$connectToDb_Obj->serverConnection = $serverConnection;

		return $connectToDb_Obj;
		/*Return*/		
	}	
}
?>