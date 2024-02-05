/*Import*/
import {agreeNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output component*/
function outputAgreeNumberAreaChart(){
	
	const setChartWidth = agreeNumberDetails_Array.length * 100 + "";

	const areaChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total Agree',
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
		colors:["#8EC63F"],
		tooltip:{
			ignoreBounds: true
		}		
	};


	const myAreaChart = google.charts;

	myAreaChart.load('current', {packages: ['corechart']});

	myAreaChart.setOnLoadCallback(function(){
		
		drawAreaChart(agreeNumberDetails_Array, areaChartOption_Obj, "overallAgreeLineChartWrap");
	});
}
/*Output component*/


/*Declare global*/
window.outputAgreeNumberAreaChart = outputAgreeNumberAreaChart;
/*Declare global*/


/*Export*/
export default outputAgreeNumberAreaChart;
/*Export*/