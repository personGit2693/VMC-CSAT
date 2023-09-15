<?php

/*For getting code details*/
function getCodeDetails(object $vmcCsat_Conn, string $inputCode){
	/*Prep return*/
	$getCodeDetails_Resp = new stdClass();
	$getCodeDetails_Resp->count = 0;
	$getCodeDetails_Resp->execution = null;
	$getCodeDetails_Resp->details_Assoc = array();

	$count = 0;
	$execution = null;
	$details_Assoc = array();
	/*Prep return*/



	/*Get code details*/
	/*_Prep query*/
	$getCodeDetails_Query = "SELECT * FROM officescodes_tab WHERE officecode_code = :inputCode AND officecode_active = 1";
	/*_Prep query*/

	/*_Execute query*/
	$getCodeDetails_QueryObj = $vmcCsat_Conn->prepare($getCodeDetails_Query);
	$getCodeDetails_QueryObj->bindValue(':inputCode', $inputCode, PDO::PARAM_STR);

	$execution = $getCodeDetails_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch details*/
	if($execution){
		$count = $getCodeDetails_QueryObj->rowCount();

		if($count != 0){
			if($codeDetails_Assoc = $getCodeDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$details_Assoc = $codeDetails_Assoc;
			}
		}
	}
	/*_Fetch details*/
	/*Get code details*/


	/*Return response*/
	$getCodeDetails_Resp->count = $count;
	$getCodeDetails_Resp->execution = $execution;
	$getCodeDetails_Resp->details_Assoc = $details_Assoc;

	return $getCodeDetails_Resp;
	/*Return response*/
}
/*For getting code details*/

?>