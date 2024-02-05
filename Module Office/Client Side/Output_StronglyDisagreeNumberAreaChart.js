/*Import*/
import {stronglyDisagreeNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output Component*/
function outputStronglyDisagreeNumberAreaChart(){
	
	const setChartWidth = stronglyDisagreeNumberDetails_Array.length * 100 + "";

	const lineChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Strongly Disagree',
		curveType: 'function',
		focusTarget: 'category',
		crosshair:{
			trigger: 'both',
			orientation: 'both'
		},
		tooltip: { 
			isHtml: true 
		},				
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
		drawAreaChart(stronglyDisagreeNumberDetails_Array, lineChartOption_Obj, "overallStronglyDisagreeLineChartWrap");
	});
}
/*Output Component*/


/*Declare global*/
window.outputStronglyDisagreeNumberAreaChart = outputStronglyDisagreeNumberAreaChart;
/*Declare global*/


/*Export*/
export default outputStronglyDisagreeNumberAreaChart;
/*Export*/