/*Import*/
import {executorFunction} from "./Executor_Filename.js";
/*Import*/

var requestVar = null;

function requestFunction(){
	requestVar = "Test";
	executorFunction(requestVar);
}

export {requestFunction, requestVar};