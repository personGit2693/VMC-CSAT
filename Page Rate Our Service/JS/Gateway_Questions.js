/*Import*/
import {requestQuestions} from "./Request_Questions.js";
/*Import*/


/*Gateway*/
const gatewayQuestions = () =>{
	requestQuestions();
}
/*Gateway*/


/*Declare global*/
window.gatewayQuestions = gatewayQuestions;
/*Declare global*/