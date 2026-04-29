/*Import*/
import {parent_id} from "./Elements_Pattern.js";
import MyComponent from "./Component_MyComponent.js";
/*Import*/


/*Render*/
function view_MyComponent(){

	MyComponent().then(component => {
		parent_id.innerHTML = component;
	});
}
/*Render*/


/*Export*/
export default view_MyComponent;
/*Export*/
