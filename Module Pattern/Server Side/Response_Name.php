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


if(isset($_POST["token"]) && isset($_POST["data1"]) && isset($_POST["data2"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$data1 = $_POST["data1"];
	$data2 = $_POST["data2"];
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

		/*Response Name*/	
		/**Prep query*/
		$getsample_Query = "
			SELECT column1 
			FROM table 
			WHERE column1 = :data1 			
		";

		if(!$data2){
			$getsample_Query .= " AND column2 = :data2";
		}

		$getsample_Query .= " ORDER BY column3 DESC";
		/**Prep query*/

		/**Execution*/
		try{

			$csatDbConnection->selectedPdoConn->beginTransaction();

			/**Execute insert to hconsult*/
			$getsample_QueryObj = $csatDbConnection->selectedPdoConn->prepare($getsample_Query);
			$getsample_QueryObj->bindValue(':data1', $data1, PDO::PARAM_STR);			

			if(!$data2){
				$getsample_QueryObj->bindValue(':data2', $data2, PDO::PARAM_STR);
			}
						
			$execution = $getsample_QueryObj->execute();
			/**Execute insert to hconsult*/

			/**Fetching*/
			if($execution){
				
				if($sample_Assoc = $getsample_QueryObj->fetch(PDO::FETCH_ASSOC)){				
					$sample1 = $sample_Assoc["column1"];
					$sample2 = $sample_Assoc["column2"];
				}			
			}
			/**Fetching*/			

			$csatDbConnection->selectedPdoConn->commit();
		}catch(PDOException $pdoEx){

			$csatDbConnection->selectedPdoConn->rollback();

			/*Return response*/
			$name_Resp->execution = $pdoEx;		

			exit(json_encode($name_Resp, JSON_NUMERIC_CHECK));
			/*Return response*/
		}				
		/**Execution*/
		/*Response Name*/
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