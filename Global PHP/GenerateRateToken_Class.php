<?php

/*Function for generating Rate Service Token*/
function generateRateToken(object $vmcCsat_Conn, string $codeId){
	
	/*Prep return*/
	$genRateTok_Resp = new stdClass();
	$genRateTok_Resp->genRateTok_Count = 0;
	$genRateTok_Resp->genRateTok_Exec = null;
	$genRateTok_Resp->genRateTok_Val = null;

	$genRateTok_Count = 0;
	$genRateTok_Exec = null;
	$genRateTok_Val = null;
	/*Prep return*/


	/*Generate Token*/
	$alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
	$alphanumeric_shuffled = str_shuffle($alphanumeric);
	$alphanumeric_Half = substr($alphanumeric_shuffled, 0, strlen($alphanumeric)/2);
	$genRateTok_Val = $generated_Token = rand(1000,9999).$alphanumeric_Half.rand(1000,9999);
	/*Generate Token*/


	/*Insert generated token onto db*/
	/*_Prep query*/
	$genRateToken_Query = "INSERT INTO rateservice_tokens_tab (
		rateservice_token_value, 
		rateservice_token_expiration,
		officecode_code
		) VALUES (
			:generated_Token, 		
			DATE_ADD(CONVERT(:getDateToday, DATETIME), INTERVAL 1 DAY),
			:codeId
		);
	";
	/*_Prep query*/

	/*_Execute query*/
	$genRateToken_QueryObj = $vmcCsat_Conn->prepare($genRateToken_Query);
	$genRateToken_QueryObj->bindValue(':generated_Token', $generated_Token, PDO::PARAM_STR);
	$genRateToken_QueryObj->bindValue(':getDateToday', date('Y-m-d H:i:s', time()), PDO::PARAM_STR);
	$genRateToken_QueryObj->bindValue(':codeId', $codeId, PDO::PARAM_STR);

	$genRateTok_Exec = $genRateToken_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch details*/
	if($genRateTok_Exec){
		$genRateTok_Count = $genRateToken_QueryObj->rowCount();
	}
	/*_Fetch details*/
	/*Insert generated token onto db*/


	/*Return response*/
	$genRateTok_Resp->genRateTok_Count = $genRateTok_Count;
	$genRateTok_Resp->genRateTok_Exec = $genRateTok_Exec;
	$genRateTok_Resp->genRateTok_Val = $genRateTok_Val;

	return $genRateTok_Resp;
	/*Return response*/
}
/*Function for generating Rate Service Token*/

?>