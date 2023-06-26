/*Import*/
import renderFloorRadioBtn from "./View_FloorRadioBtn.js";
import token from "../../Global JS/Token.js";
import {buildingId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var floorDetails_Array = [];
/*Export variables*/


/*Get floor details*/
function requestFloors(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting floors has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					floorDetails_Array = httpResponse.floorDetails_Array;
					renderFloorRadioBtn();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Floors");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&buildingId="+buildingId;
	
	httpRequest.open("POST", "../PHP/Response_Floors.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get floor details*/


/*Export*/
export {requestFloors ,floorDetails_Array};
/*Export*/