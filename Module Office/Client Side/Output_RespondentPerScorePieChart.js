/*Import*/
import {respondentPerScoreDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output component*/
function outputRespondentPerScorePieChart(){

	const pieChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Overall Client Satisfaction',		
		titleTextStyle:{
			color: "#494C55",
			fontSize: 16,
			bold: false
		},
		backgroundColor:{
			fill: "transparent",
			stroke: "transparent",
			strokeWidth: 0
		},
		chartArea:{
			top: 40,		
			height: 'auto',
			width: 'auto'
		},
		height: 'auto',
		width: 'auto',				
		legend:{
			alignment: "center",
			position: "bottom",
			textStyle: { 
				color: "#494C55"
			}
		},
		pieSliceTextStyle:{
			color: "#ffffff" 
		},
		colors:["#036939","#8EC63F","#FAB142","#E35B6F","#BD212F","#92A2AA"]
	}

	const myPieChart = google.charts;

	myPieChart.load('current', {'packages':['corechart']});

	myPieChart.setOnLoadCallback(function(){
		
		drawPieChart(respondentPerScoreDetails_Array, pieChartOption_Obj, "overallServRatePieChartWrap");
	});
}
/*Output component*/


/*Declare global*/
window.outputRespondentPerScorePieChart = outputRespondentPerScorePieChart;
/*Declare global*/


/*Export*/
export default outputRespondentPerScorePieChart;
/*Export*/