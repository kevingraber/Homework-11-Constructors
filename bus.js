// Creating the bus constructor.
function bus(studentsOnTheBus, driverName, color, gas) {
	this.studentsOnTheBus = studentsOnTheBus;
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(person) {
		this.studentsOnTheBus.push(person)
	}
	this.busChatter = function() {
		for (var i = 0; i < studentsOnTheBus.length; i++) {
			if( studentsOnTheBus[i].canStudentHaveFun() ) {
				console.log(studentsOnTheBus[i].name + " says: " + studentsOnTheBus[i].catchPhrase)
			}
		}
	}
}

// Exporting the bus constructor.
module.exports = bus;