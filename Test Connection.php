<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
session_start();
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "./Global PHP/Global_Connection.php";
/*Global Required Files*/

	
/*Required Files*/

/*Required Files*/


/*Query string*/

/*Query string*/


/*Prep variables*/
$dbConnection = connectToDb("vmc_platform");	
/*Prep variables*/


/*Prep response*/
$validToken = null;
$execution = null;

$testConnection_Resp = new stdClass();	
$testConnection_Resp->validAccess = true;
$testConnection_Resp->dbConnection = $dbConnection;		
$testConnection_Resp->validToken = $validToken;
$testConnection_Resp->execution = $execution;
/*Prep response*/


/*Check connection*/	
/**Referral DB Connection*/
if($dbConnection->serverConnection != null){
	echo json_encode($testConnection_Resp, JSON_NUMERIC_CHECK);

	/**Disconnect*/
	$dbConnection = null;
	/**Disconnect*/

	return;
}else if($dbConnection->selectedPdoConn == null){
	echo json_encode($testConnection_Resp, JSON_NUMERIC_CHECK);

	/**Disconnect*/
	$dbConnection = null;
	/**Disconnect*/

	return;
}
/**Referral DB Connection*/
/*Check connection*/


/*Disconnect*/
$dbConnection = null;	
/*Disconnect*/


/*Return response*/
$testConnection_Resp->execution = $execution;		

echo json_encode($testConnection_Resp, JSON_NUMERIC_CHECK);
/*Return response*/

?>