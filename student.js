// var prompt = require('prompt')
// prompt.start();

function student(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function() {
		if (this.detentions < 10 && this.gpa > 2) {
			console.log(this.name + ' can have fun!')
			return true
		} else {
			console.log(this.name + " can't have fun :(")
			return false
		}
	}
}

// var kevin = new student('kevin', 'guy', '10', 4, 0, 0, 'hey dudes!');
// console.log("Can Kevin have fun?")
// kevin.canStudentHaveFun()

// var darby = new student('darby', 'girl', '10', 1, 12, 0, 'hey dudettes!')
// console.log("Can darby have fun?")
// darby.canStudentHaveFun()

// prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {

// 	var newKid = new student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

// 	console.log(newKid)
// 	newKid.canStudentHaveFun();

// })

// console.log(student)

module.exports = student;

