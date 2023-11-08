/*Import*/
import {overallStronglyDisagreeData_Array} from "../../Global JS/Values_Page_Dashboard.js";
/*Import*/


/*Function for loading Overall Strongly Disagree Line Chart*/
function outputOverallStronglyDisagreeLineChart(){
	
	const setChartWidth = overallStronglyDisagreeData_Array.length * 100 + "";

	const lineChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Strongly Disagree',
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
		colors:["#BD212F"]		
	};


	const myLineChart = google.charts;

	myLineChart.load('current', {packages: ['corechart', 'line']});

	myLineChart.setOnLoadCallback(function(){
		drawAreaChart(overallStronglyDisagreeData_Array, lineChartOption_Obj, "overallStronglyDisagreeLineChartWrap");
	});
}
/*Function for loading Overall Strongly Disagree Line Chart*/


/*Declare global*/
window.outputOverallStronglyDisagreeLineChart = outputOverallStronglyDisagreeLineChart;
/*Declare global*/