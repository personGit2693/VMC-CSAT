<?php 
/*Function for checking Global Token*/
function validateGlobalToken(object $vmcCsat_Conn, string $token_Param){
	/*Prep return*/
	$validateGlobalToken_Resp = new stdClass();
	$validateGlobalToken_Resp->counted = 0;
	$validateGlobalToken_Resp->execution = null;

	$counted = 0;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	$tokenTitle = "Global Token";
	/*Prep variables*/


	/*Check token on db*/
	/*_Prep query*/
	$validateGlobalToken_Query = "SELECT token_value 
		FROM tokens_tab 
		WHERE token_title = :tokenTitle
		AND token_value = :token_Param;
	";
	/*_Prep query*/

	/*_Execute query*/
	$validateGlobalToken_QueryObj = $vmcCsat_Conn->prepare($validateGlobalToken_Query);
	$validateGlobalToken_QueryObj->bindValue(':tokenTitle', $tokenTitle, PDO::PARAM_STR);
	$validateGlobalToken_QueryObj->bindValue(':token_Param', $token_Param, PDO::PARAM_STR);
	$execution = $validateGlobalToken_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		$counted = $validateGlobalToken_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Check token on db*/


	/*Return response*/
	$validateGlobalToken_Resp->counted = $counted;
	$validateGlobalToken_Resp->execution = $execution;

	return $validateGlobalToken_Resp;
	/*Return response*/
}
/*Function for checking Global Token*/
?>