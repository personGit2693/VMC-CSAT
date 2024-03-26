/*Import*/
import {selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import {submitCommentReport} from "./SubmitRequest_CommentReport.js";
import outputCommentsTable from "./Output_CommentsTable.js";
import outputCommentsTableLoader from "./Output_CommentsTableLoader.js";
/*Import*/


/*Controller*/
function controller_Document_GetCommentsTable(){	

	submitCommentReport(outputCommentsTable, outputCommentsTableLoader, "commentsTableLoader-Id", selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetCommentsTable = controller_Document_GetCommentsTable;
/*Declare Global*/


/*Export*/
export default controller_Document_GetCommentsTable;
/*Export*/