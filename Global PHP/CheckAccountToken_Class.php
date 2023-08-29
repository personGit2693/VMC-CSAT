<?php 

/*Function for validating Account Token*/
function validateAccToken(object $vmcCsat_Conn, string $accToken, string $accountNumber){
	/*Prep return*/
	$validateAccTok_Resp = new stdClass();
	$validateAccTok_Resp->found = 0;
	$validateAccTok_Resp->execution = null;

	$found = 0;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	$datetimeToday = date('Y-m-d H:i:s', time());
	/*Prep variables*/


	/*Check if token exist on db*/
	/*_Prep query*/
	$validateAccTok_Query = "
		SELECT accounttoken_id 
		FROM accounttokens_tab 
		WHERE accounttoken_value = :accToken
		AND account_number = :accountNumber
		AND accounttoken_expiration > CONVERT(:datetimeToday, DATETIME);
	";
	/*_Prep query*/

	/*_Execute query*/
	$validateAccTok_QueryObj = $vmcCsat_Conn->prepare($validateAccTok_Query);
	$validateAccTok_QueryObj->bindValue(':accToken', $accToken, PDO::PARAM_STR);
	$validateAccTok_QueryObj->bindValue(':accountNumber', $accountNumber, PDO::PARAM_STR);
	$validateAccTok_QueryObj->bindValue(':datetimeToday', $datetimeToday, PDO::PARAM_STR);
	$execution = $validateAccTok_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		$found = $validateAccTok_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Check if token exist on db*/


	/*Return response*/
	$validateAccTok_Resp->found = $found;
	$validateAccTok_Resp->execution = $execution;

	return $validateAccTok_Resp;
	/*Return response*/
}
/*Function for validating Account Token*/

?>