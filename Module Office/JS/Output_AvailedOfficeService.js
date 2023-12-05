/*Import*/
import {availedOfficeServiceData_Array} from "../../Global JS/Values_Module_Office.js";
/*Import*/


/*Function for loading Availed Office Services Chart*/
function outputAvailedOfficeServiceChart(){

	const setChartHeight = availedOfficeServiceData_Array.length * 50 + "";

	const barChartOption_Obj = {
		fontSize: 12,
		fontName: "Calibri",
		title: 'Service Availed',					
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
			left: 130,
			top: 30,		
			bottom: 30,
			height: setChartHeight,
			width: "auto"
		},
		height: setChartHeight,
		width: "auto",				
		legend:{
			alignment: "start",
			position: "none",
			textStyle: { 
				color: "#494C55"
			}
		},
		axisTitlesPosition: 'out',
		hAxis: {
			title: 'Availed',			
			textStyle:{
				color: '#494C55'
			},
			titleTextStyle:{
				color: "#494C55"
			}			
		},
		vAxis: {
			title: 'Services',
			minValue: 0,
			format: 'decimal',
			textStyle:{
				color: "#494C55"
			},
			titleTextStyle:{
				color: "#494C55"
			}			
		},
		colors:["#073763"]		
	};


	const myBarChart = google.charts;

	myBarChart.load('current', {packages: ['corechart', 'bar']});

	myBarChart.setOnLoadCallback(function(){
		drawBarChart(availedOfficeServiceData_Array, barChartOption_Obj, "availedOfficeServiceWrap");
	});
}
/*Function for loading Availed Office Services Chart*/


/*Declare global*/
window.outputAvailedOfficeServiceChart = outputAvailedOfficeServiceChart;
/*Declare global*/


/*Export*/
export default outputAvailedOfficeServiceChart;
/*Export*/