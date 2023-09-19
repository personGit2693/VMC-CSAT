/*Validate code*/
const checkInputCode = () =>{
	if(inputCode.value != ""){
		alert("Submit Request");
	}else if(inputCode.value == ""){
		notifyNodeBox(false, "Please provide the code", "notiEnterCodeModal-Id");
	}
}


function checkInputCodeEnter(e){

	if(e.key == "Enter"){
		checkInputCode();
	}	
}
/*Validate code*/