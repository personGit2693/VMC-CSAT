/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var elemReference_Name = "";

var eventReference_Name = "";

var name = "";
var data1 = "";
var data2 = "";
var response_Name_Path = "./../Server Side/Response_Name.php";
/*Prep export variables*/


/*Element Reference, Event Reference, Assign, Reset*/
/**Element Reference*/
function assignElemReference_Name(newValue){
	elemReference_Name = newValue;
}
/**Element Reference*/


/**Event Reference*/
function assignEventReference_Name(newValue){
	eventReference_Name = newValue;
}
/**Event Reference*/


/**Assign*/
function assign_Name(newValue){
	name = newValue;
}

function assign_Data1(newValue){
	data1 = newValue;
}

function assign_Data2(newValue){
	data2 = newValue;
}
/**Assign*/


/**Reset*/
function reset_Name(){
	name = "";
}
/**Reset*/
/*Element Reference, Event Reference, Assign, Reset*/


/*Export*/
export {
	response_Name_Path,
	assignElemReference_Name,
	assignEventReference_Name,
	assign_Name,
	reset_Name,
	data1,
	data2
};
/*Export*/