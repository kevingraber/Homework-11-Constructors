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

module.exports = student;

