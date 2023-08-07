/*Import*/
import {overallNoRatingData_Array} from "../../Global JS/Values_Page_Dashboard.js";
/*Import*/


/*Function for loading Overall No Rating Chart*/
function loadOverallNoRatingLineChart(){
	
	const setChartWidth = overallNoRatingData_Array.length * 100 + "";

	const lineChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Daily Total No Rating',
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
		colors:["#92A2AA"]		
	};


	const myLineChart = google.charts;

	myLineChart.load('current', {packages: ['corechart', 'line']});

	myLineChart.setOnLoadCallback(function(){
		drawAreaChart(overallNoRatingData_Array, lineChartOption_Obj, "overallNoRatingLineChartWrap");
	});
}
/*Function for loading Overall No Rating Chart*/


/*Export*/
export default loadOverallNoRatingLineChart;
/*Export*/