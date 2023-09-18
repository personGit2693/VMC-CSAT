<?php 

/*Function for validating Rate Token*/
function validateRateToken(object $vmcCsat_Conn, string $rateToken){
	/*Prep return*/
	$validateRateTok_Resp = new stdClass();
	$validateRateTok_Resp->validateRateTok_Count = 0;
	$validateRateTok_Resp->validateRateTok_Exec = null;

	$validateRateTok_Count = 0;
	$validateRateTok_Exec = null;
	/*Prep return*/


	/*Prep variables*/
	$datetimeToday = date('Y-m-d H:i:s', time());
	/*Prep variables*/


	/*Check if token exist on db*/
	/*_Prep query*/
	$validateRateTok_Query = "SELECT rateservice_tokens_tab.rateservice_token_value AS 'rateservice_token_value'
	FROM rateservice_tokens_tab 
	INNER JOIN officescodes_tab 
	ON rateservice_tokens_tab.officecode_code = officescodes_tab.officecode_code
	WHERE rateservice_tokens_tab.rateservice_token_value = :rateToken
	AND rateservice_tokens_tab.rateservice_token_expiration >= CONVERT(:datetimeToday, DATETIME)
	AND officescodes_tab.officecode_active = 1;";
	/*_Prep query*/

	/*_Execute query*/
	$validateRateTok_QueryObj = $vmcCsat_Conn->prepare($validateRateTok_Query);
	$validateRateTok_QueryObj->bindValue(':rateToken', $rateToken, PDO::PARAM_STR);
	$validateRateTok_QueryObj->bindValue(':datetimeToday', $datetimeToday, PDO::PARAM_STR);
	$validateRateTok_Exec = $validateRateTok_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($validateRateTok_Exec){
		$validateRateTok_Count = $validateRateTok_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Check if token exist on db*/


	/*Return response*/
	$validateRateTok_Resp->validateRateTok_Count = $validateRateTok_Count;
	$validateRateTok_Resp->validateRateTok_Exec = $validateRateTok_Exec;

	return $validateRateTok_Resp;
	/*Return response*/
}
/*Function for validating Rate Token*/

?>