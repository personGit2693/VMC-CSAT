/*Import*/
import {overallAgreeData_Array} from "../../Global JS/Values_Module_Office.js";
/*Import*/


/*Function for loading Overall Agree Line Chart*/
function outputOverallAgreeLineChart(){
	
	const setChartWidth = overallAgreeData_Array.length * 100 + "";

	const lineChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Agree',
		curveType: 'function',		
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
			left: 60,
			top: "auto",		
			height: "auto",
			width: "auto"
		},
		height: "auto",
		width: setChartWidth,				
		legend:{
			alignment: "start",
			position: "none",
			textStyle: { 
				color: "#494C55"
			}
		},
		axisTitlesPosition: 'out',
		hAxis: {
			title: 'Dates',
			textStyle:{
				color: '#494C55'
			},
			titleTextStyle:{
				color: "#494C55"
			}			
		},
		vAxis: {
			title: 'Total Response',
			minValue: 0,
			textStyle:{
				color: "#494C55"
			},
			titleTextStyle:{
				color: "#494C55"
			}
		},
		colors:["#8EC63F"],
		tooltip:{
			ignoreBounds: true
		}		
	};


	const myLineChart = google.charts;

	myLineChart.load('current', {packages: ['corechart', 'line']});

	myLineChart.setOnLoadCallback(function(){
		drawAreaChart(overallAgreeData_Array, lineChartOption_Obj, "overallAgreeLineChartWrap");
	});
}
/*Function for loading Overall Agree Line Chart*/


/*Declare global*/
window.outputOverallAgreeLineChart = outputOverallAgreeLineChart;
/*Declare global*/


/*Export*/
export default outputOverallAgreeLineChart;
/*Export*/