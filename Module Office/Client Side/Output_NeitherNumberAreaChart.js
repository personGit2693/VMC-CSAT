/*Import*/
import {neitherNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output component*/
function outputNeitherNumberAreaChart(){
	
	const setChartWidth = neitherNumberDetails_Array.length * 100 + "";

	const areaChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Neither Agree nor Disagree',
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
		colors:["#FAB142"]		
	};


	const myAreaChart = google.charts;

	myAreaChart.load('current', {packages: ['corechart']});

	myAreaChart.setOnLoadCallback(function(){
		
		drawAreaChart(neitherNumberDetails_Array, areaChartOption_Obj, "overallNeitherLineChartWrap");
	});
}
/*Output component*/


/*Declare global*/
window.outputNeitherNumberAreaChart = outputNeitherNumberAreaChart;
/*Declare global*/


/*Export*/
export default outputNeitherNumberAreaChart;
/*Export*/