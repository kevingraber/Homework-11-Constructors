// Creating the bus constructor.
function bus(studentsOnTheBus, driverName, color, gas) {
	this.studentsOnTheBus = studentsOnTheBus;
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(person) {
		this.studentsOnTheBus.push(person)
		console.log(" ")
		console.log(person.name + " is now on the bus!")
		console.log(" ")
		console.log("The students on the bus are...")
		console.log(" ")
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].name)
		}
	}
	this.busChatter = function() {
		for (var i = 0; i < studentsOnTheBus.length; i++) {
			if( studentsOnTheBus[i].canStudentHaveFun() ) {
				console.log(studentsOnTheBus[i].name + " says: " + studentsOnTheBus[i].catchPhrase)
			}
		}
	}

	// Bonus #1
	// Searches studentsOnTheBus for the student's name and then splices them out of the array and logs the remaining students.
	this.removeStudent = function(studentName) {
		studentName = studentName.toLowerCase()
		for (var i = 0; i < studentsOnTheBus.length; i++) {
			if ( studentName == studentsOnTheBus[i].name.toLowerCase() ) {
				studentsOnTheBus.splice(i, 1)
				console.log(studentName + " has been removed from the bus!")
				console.log("The remaining students are: ")
				for (var j = 0; j < studentsOnTheBus.length; j++) {
					console.log(studentsOnTheBus[j].name)
				}
			}
		}
	}

}

// Exporting the bus constructor.
module.exports = bus;