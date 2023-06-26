/*Import*/
import {floorRadioBtnsWrap, officeRadioBtnsWrap, serviceTypeRadioBtnsWrap, officeServiceRadioBtnsWrap} from "../Page Rate Our Service/JS/JsCollection_Page_RateService.js";
/*Import*/


/*Prep export variables*/
var buildingId = "";
var floorId = "";
var officeId = "";
var clientTypeId = "";
var serviceTypeId = "";
var officeServiceId = "";
/*Prep export variables*/


/*Assign Value for buildingId*/
function valueBuilding(selectedBuilding_Base){
	const selectedBuilding_Obj = JSON.parse(atob(selectedBuilding_Base));

	floorId = "";
	buildingId = selectedBuilding_Obj.building_id;

	floorRadioBtnsWrap.innerHTML = "Choose building first.";
}
/*Assign Value for buildingId*/


/*Assign Value for floorId*/
function valueFloor(selectedFloor_Base){
	const selectedFloor_Obj = JSON.parse(atob(selectedFloor_Base));

	officeId = "";
	floorId = selectedFloor_Obj.floorId;

	officeRadioBtnsWrap.innerHTML = "Select building and floor.";
}
/*Assign Value for floorId*/


/*Assign Value for clientTypeId*/
function valueRespondentType(selectedRespondentType_Base){
	const selectedRespondentType_Obj = JSON.parse(atob(selectedRespondentType_Base));

	serviceTypeId = "";
	officeServiceId = "";

	clientTypeId = selectedRespondentType_Obj.clienttype_id;

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceRadioBtnsWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
}
/*Assign Value for clientTypeId*/


/*Assign Value for officeId*/
function valueOffice(selectedOffice_Base){
	const selectedOffice_Obj = JSON.parse(atob(selectedOffice_Base));

	serviceTypeId = "";
	officeServiceId = "";

	officeId = selectedOffice_Obj.office_id;

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceRadioBtnsWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
}
/*Assign Value for officeId*/


/*Assign Value for serviceTypeId*/
function valueServiceType(selectedServiceType_Base){
	const selectedServiceType_Obj = JSON.parse(atob(selectedServiceType_Base));

	officeServiceId = "";
	serviceTypeId = selectedServiceType_Obj.servicetype_id;

	officeServiceRadioBtnsWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
}
/*Assign Value for serviceTypeId*/


/*Assign Value for officeServiceId*/
function valueOfficeService(selectedOfficeService_Base){
	const selectedOfficeService_Obj = JSON.parse(atob(selectedOfficeService_Base));

	officeServiceId = selectedOfficeService_Obj.officeservice_id;
}
/*Assign Value for officeServiceId*/


/*Declare global*/
window.valueBuilding = valueBuilding;
window.valueFloor = valueFloor;
window.valueRespondentType = valueRespondentType;
window.valueOffice = valueOffice;
window.valueServiceType = valueServiceType;
window.valueOfficeService = valueOfficeService;
/*Declare global*/


/*Export*/
export {buildingId, floorId, officeId, clientTypeId, serviceTypeId, officeServiceId};
/*Export*/