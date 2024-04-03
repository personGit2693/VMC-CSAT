<?php 

function generatePasscode(object $selectedPdoConn, int $officeId){

	/*Prep return*/
	$generatePasscode_Resp = new stdClass();
	$generatePasscode_Resp->execution = null;
	$generatePasscode_Resp->officeCodeCreated = 0;
	$generatePasscode_Resp->generatedOfficeCode = null;

	$execution = null;
	$officeCodeCreated = 0;	
	$generatedOfficeCode = null;
	/*Prep return*/


	/*Generate Office Code*/	
	/*_Generating*/
	$alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	$alphanumeric_shuffled = str_shuffle($alphanumeric);
	$alphanumeric_Half = substr($alphanumeric_shuffled, 0, 5);
	$generatedOfficeCode = $alphanumeric_Half;
	/*_Generating*/

	/*_Prep query*/
	$generatePasscode_Query = "INSERT INTO officescodes_tab (officecode_code, office_id) VALUES (:generatedOfficeCode, :officeId)"; 							
	/*_Prep query*/

	/*_Execute query*/
	$generatePasscode_QueryObj = $selectedPdoConn->prepare($generatePasscode_Query);		
	$generatePasscode_QueryObj->bindValue(':generatedOfficeCode', $generatedOfficeCode, PDO::PARAM_STR);			
	$generatePasscode_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
	$execution = $generatePasscode_QueryObj->execute();
	/*_Execute query*/

	/*_Fetching*/
	if($execution){
				
		$officeCodeCreated = $generatePasscode_QueryObj->rowCount();
	}
	/*_Fetching*/			
	/*Generate Office Code*/


	/*Return response*/	
	$generatePasscode_Resp->execution = $execution;
	$generatePasscode_Resp->officeCodeCreated = $officeCodeCreated;
	$generatePasscode_Resp->generatedOfficeCode = $generatedOfficeCode;

	return $generatePasscode_Resp;
	/*Return response*/	
}

?>