<?php

/*Burning generated code and rate token*/
function burnCode(object $vmcCsat_Conn, string $codeId){
	
	/*Prep return*/
	$burnCode_Resp = new stdClass();
	$burnCode_Resp->execution = null;
	$burnCode_Resp->count = 0;	

	$execution = null;
	$count = 0;	
	/*Prep return*/


	/*Delete code and token onto db*/
	/*_Prep query*/
	$deleteCodeToken_Query = "DELETE FROM officescodes_tab WHERE officecode_code = :codeId";
	/*_Prep query*/

	/*_Execute query*/
	$deleteCodeToken_QueryObj = $vmcCsat_Conn->prepare($deleteCodeToken_Query);
	$deleteCodeToken_QueryObj->bindValue(':codeId', $codeId, PDO::PARAM_STR);

	$execution = $deleteCodeToken_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch details*/
	if($execution){
		$count = $deleteCodeToken_QueryObj->rowCount();
	}
	/*_Fetch details*/
	/*Delete code and token onto db*/	


	/*Return response*/
	$burnCode_Resp->execution = $execution;
	$burnCode_Resp->count = $count;

	return $burnCode_Resp;
	/*Return response*/
}
/*Burning generated code and rate token*/

?>