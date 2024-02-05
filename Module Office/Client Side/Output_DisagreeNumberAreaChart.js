/*Import*/
import {disagreeNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output component*/
function outputDisagreeNumberAreaChart(){
	
	const setChartWidth = disagreeNumberDetails_Array.length * 100 + "";

	const areaChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Disagree',
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
		colors:["#E35B6F"]		
	};


	const myAreaChart = google.charts;

	myAreaChart.load('current', {packages: ['corechart']});

	myAreaChart.setOnLoadCallback(function(){

		drawAreaChart(disagreeNumberDetails_Array, areaChartOption_Obj, "overallDisagreeLineChartWrap");
	});
}
/*Output component*/


/*Declare global*/
window.outputDisagreeNumberAreaChart = outputDisagreeNumberAreaChart;
/*Declare global*/


/*Export*/
export default outputDisagreeNumberAreaChart;
/*Export*/