<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
session_start();
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "./../../Global PHP/Global Connection.php";
require_once "./../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["details"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep variables*/
	$csatDbConnection = connectToDb("vmc_csat");
	/*Prep variables*/
	

	/*Prep response*/
	$validToken = null;
	$execution = null;
	$sample1 = null;
	$sample2 = null;
	
	$name_Resp = new stdClass();	
	$name_Resp->validAccess = true;
	$name_Resp->csatDbConnection = $csatDbConnection;		
	$name_Resp->validToken = $validToken;
	$name_Resp->execution = $execution;
	$name_Resp->sample1 = $sample1;
	$name_Resp->sample2 = $sample2;		
	/*Prep response*/


	/*Check connection*/
	/**CSAT Connection*/
	if($csatDbConnection->serverConnection != null){

		/**Disconnect*/		
		$csatDbConnection = null;
		/**Disconnect*/

		exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));				
	}else if($csatDbConnection->selectedPdoConn == null){

		/**Disconnect*/		
		$csatDbConnection = null;
		/**Disconnect*/

		exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));
	}
	/**CSAT Connection*/
	/*Check connection*/


	/*Validate secret key*/
	$validateGlobalToken_Obj = validateGlobalToken($csatDbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating secret key has execution problem!";
		$name_Resp->validToken = $validToken;

		/**Disconnect*/		
		$csatDbConnection = null;
		/**Disconnect*/

		exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));
	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "secret key can't be found!";
		$name_Resp->validToken = $validToken;

		/**Disconnect*/		
		$csatDbConnection = null;
		/**Disconnect*/

		exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));
	}	
	/*Validate secret key*/


	if($validToken === null){			

		/*Get Consultation Details*/	

		/**Prep query*/
		$getsample2_Query = "
			SELECT logdetails 
			FROM hconsults 
			WHERE hpercode = :hpercode 
			AND tscode = :tscode 

		";

		if(!$newConsultation){
			$getsample2_Query .= " AND enccode = :enccode";
		}

		$getsample2_Query .= " ORDER BY created_at DESC";
		/**Prep query*/

		/**Execution*/
		try{

			$csatDbConnection->selectedPdoConn->beginTransaction();

			/**Execute insert to hconsult*/
			$getsample2_QueryObj = $csatDbConnection->selectedPdoConn->prepare($getsample2_Query);
			$getsample2_QueryObj->bindValue(':hpercode', $patientRecord_Obj->patientDetails->hpercode, PDO::PARAM_STR);
			$getsample2_QueryObj->bindValue(':tscode', $patientRecord_Obj->tscode, PDO::PARAM_STR);

			if(!$newConsultation){
				$getsample2_QueryObj->bindValue(':enccode', $patientRecord_Obj->enccode, PDO::PARAM_STR);	
			}
						
			$execution = $getsample2_QueryObj->execute();
			/**Execute insert to hconsult*/

			/**Fetching*/
			if($execution){
				
				if($sample2_Assoc = $getsample2_QueryObj->fetch(PDO::FETCH_ASSOC)){				
					$sample2 = $sample2_Assoc["logdetails"];
					$sample1 = true;
				}			
			}
			/**Fetching*/			

			$csatDbConnection->selectedPdoConn->commit();
		}catch(PDOException $pdoEx){

			$csatDbConnection->selectedPdoConn->rollback();

			/*Return response*/
			$name_Resp->execution = $pdoEx;	
			$name_Resp->sample1 = false;	

			exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));
			/*Return response*/
		}				
		/**Execution*/
		/*Get Consultation Details*/
	}
	

	/*Disconnect*/	
	$csatDbConnection = null;	
	/*Disconnect*/


	/*Return response*/
	$name_Resp->execution = $execution;	
	$name_Resp->sample1 = $sample1;	
	$name_Resp->sample2 = $sample2;

	echo json_encode($name_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
}else{

	/*Return response*/
	$name_Resp = new stdClass();
	$name_Resp->validAccess = false;

	echo json_encode($name_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
}
?>