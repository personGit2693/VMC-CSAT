/*Import*/
import renderOfficeRadioBtn from "./View_OfficeRadioBtn.js";
import token from "../../Global JS/Token.js";
import {buildingId} from "./Gateway_Floors.js";
import {floorId} from "./Gateway_Offices.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var officeDetails_Array = [];
/*Export variables*/


/*Get office details*/
function requestOffices(){

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
					officeDetails_Array = httpResponse.officeDetails_Array;
					renderOfficeRadioBtn();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Offices");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&buildingId="+buildingId+
	"&floorId="+floorId;
	
	httpRequest.open("POST", "../PHP/Response_Offices.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get office details*/


/*Export*/
export {requestOffices ,officeDetails_Array};
/*Export*/