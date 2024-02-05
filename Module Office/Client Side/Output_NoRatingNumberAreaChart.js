/*Import*/
import {noRatingNumberDetails_Array} from "./Values_Office.js";
/*Import*/


/*Output Component*/
function outputNoRatingAreaChart(){
	
	const setChartWidth = noRatingNumberDetails_Array.length * 100 + "";

	const myAreaChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total No Rating',
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
		colors:["#92A2AA"]		
	};


	const myAreaChart = google.charts;

	myAreaChart.load('current', {packages: ['corechart']});

	myAreaChart.setOnLoadCallback(function(){
		
		drawAreaChart(noRatingNumberDetails_Array, myAreaChartOption_Obj, "overallNoRatingLineChartWrap");
	});
}
/*Output Component*/


/*Declare global*/
window.outputNoRatingAreaChart = outputNoRatingAreaChart;
/*Declare global*/


/*Export*/
export default outputNoRatingAreaChart;
/*Export*/