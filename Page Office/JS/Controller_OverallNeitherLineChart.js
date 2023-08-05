/*Import*/
import {overallNeitherData_Array} from "../../Global JS/Values_Page_Dashboard.js";
/*Import*/


/*Function for loading Overall Neither Chart*/
function loadOverallNeitherLineChart(){
	
	const setChartWidth = overallNeitherData_Array.length * 100 + "";

	const lineChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Overall Neither Agree nor Disagree',
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
			position: "right",
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


	const myLineChart = google.charts;

	myLineChart.load('current', {packages: ['corechart', 'line']});

	myLineChart.setOnLoadCallback(function(){
		drawAreaChart(overallNeitherData_Array, lineChartOption_Obj, "overallNeitherLineChartWrap");
	});
}
/*Function for loading Overall Neither Chart*/


/*Export*/
export default loadOverallNeitherLineChart;
/*Export*/