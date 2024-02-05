/*Import*/
import {stronglyAgreeNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output component*/
function outputStronglyAgreeNumberAreaChart(){
	
	const setChartWidth = stronglyAgreeNumberDetails_Array.length * 100 + "";

	const areaChartOption = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Strongly Agree',
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
		colors:["#036939"]		
	};


	const myAreaChart = google.charts;

	myAreaChart.load('current', {packages: ['corechart']});

	myAreaChart.setOnLoadCallback(function(){
		
		drawAreaChart(stronglyAgreeNumberDetails_Array, areaChartOption, "overallStronglyAgreeLineChartWrap");
	});
}
/*Output component*/


/*Declare global*/
window.outputStronglyAgreeNumberAreaChart = outputStronglyAgreeNumberAreaChart;
/*Declare global*/


/*Export*/
export default outputStronglyAgreeNumberAreaChart;
/*Export*/