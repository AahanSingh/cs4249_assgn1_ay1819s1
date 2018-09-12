// Class used to track experiment
class ExperimentTracker {


	constructor() {
		this.trials = [];
		this.attempt = 0;
		this.trial = null;
		this.attempt = null;
		this.menuType = null;
		this.menuDepth = null;
		this.inputDevice = null;
		this.targetItem = null;
		this.selectedItem = null;
		this.startTime = null;
		this.endTime = null;
		this.help = null;
		
		this.pid=null
		this.age = null
		this.gender = null
		this.country = null
		this.compexp = null
		this.lapexp = null
		this.markexp = null
		this.radexp = null
	}
	
	resetTimers(){
		this.startTime = null;
		this.endTime = null;
	}

	startTimer() {
		this.startTime = Date.now();
	}

	recordSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
		this.stopTimer();
	}

	stopTimer() {
		
		this.endTime = Date.now();
		this.trials.push([this.pid, this.age, this.gender, this.country, this.compexp, this.lapexp, this.markexp, this.radexp,this.trial, this.attempt, this.inputDevice, this.menuType, this.menuDepth,this.targetItem, this.selectedItem, this.startTime, this.endTime, this.help])
		this.resetTimers();
		this.attempt++;

	}

	newTrial() {
		this.attempt = 1;
	}

	toCsv() {
		var csvFile = "PID,Age,Gender,Country,Computer_Exp,Laptop_Exp,Marking_Exp,Radial_Exp,Trial,Attempt,Input_Device,Menu_Type,Menu_Depth,Target_Item,Selected_Item,Start_Time,End_Time,Help_Taken\n";
		for (var i = 0; i < this.trials.length; i++) {
			csvFile += this.trials[i].join(',');
			csvFile += "\n";
		}

		var hiddenLink = document.createElement('a');
		hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
		hiddenLink.target = '_blank';
		hiddenLink.download = 'experiment_results.csv';
		document.body.appendChild(hiddenLink);
		hiddenLink.click();
	}


}