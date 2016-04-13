// Requiring the needed JavaScript files and the prompt node package.
var prompt = require('prompt');
var student = require('./student.js');
var bus = require('./bus.js');

// Initializing the prompt package.
prompt.start();

// Creating 20 students using the student constructor.
var kevin = new student('Kevin', 'male', '10th', 4, 0, 'Never', "Hey I'm walkin' here!")
var alex = new student('Alex', 'male', '12th', 2, 10, 'Sometimes', "What's for lunch?")
var jace = new student('Jace', 'male', '12th', 1, 4, 'Sometimes', "Cowabunga Dude!")
var liliana = new student('Liliana', 'female', '11th', 3, 3, 'Sometimes', "I love pie.")
var gideon = new student('Gideon', 'male', '9th', 2.5, 0, 'Never', "EVISCERATE THE PROLETARIAT")
var nissa = new student('Nissa', 'female', '10th', 4, 0, 'Sometimes', "Yo Yo Yo!")
var patrick = new student('Patrick', 'male', '8th', 3.5, 7, 'Everyday', "When I grow up I want to be a fire truck!")
var susan = new student('Susan', 'female', '12th', 4, 1, 'Sometimes', "BUILD THE WALL")
var sarah = new student('Sarah', 'female', '7th', 2, 2, 'Always', "Anyone have a light?")
var ulga = new student('Ulga', 'female', '12th', 3, 1, 'Sometimes', "Guten Morgen")

var doug = new student('Doug', 'male', '4th', 3, 2, 'Sometimes', "Marvel is better than DC")
var kate = new student('Kate', 'female', '12th', 4, 5, 'Never', "Where are my glasses?")
var hodor = new student('Hodor', 'male', '12th', 4, 0, 'Sometimes', "Hodor")
var malfoy = new student('Malfoy', 'male', '10th', 4, 0, 'Sometimes', "My father's going to hear about this!")
var james = new student('James', 'male', '12th', 1, 10, 'Sometimes', "How YOU doin?")
var donald = new student('Donald', 'male', '9th', 3, 4, 'Always', "Wakka Wakka")
var pongo = new student('Pongo', 'male', '12th', 1, 1, 'Sometimes', "Woof Woof")
var jordan = new student('Jordan', 'male', '11th', 3, 1, 'Sometimes', "Anyway here's Wonderwall..")
var patsy = new student('Patsy', 'female', '14th', 2, 20, 'Sometimes', "Sweetie, Sweetie Darling!")
var chen = new student('Chen', 'male', '7th', 3, 1, 'Sometimes', "Cowabunga!")

// Adding all of the students to an array.
var studentArray = [
	kevin, alex, jace, liliana, gideon, nissa, patrick, susan, sarah, ulga, doug, kate, hodor, malfoy, james, donald, pongo, jordan, patsy, chen
]

// Creating a new bus using the bus constructor.
var newBus = new bus(studentArray, 'Christopher', 'Yellow', 20)

// Invoking the busChatter method.
console.log(" ")
newBus.busChatter()

// Using prompt to allow the user to enter a student's info, tells them if the student can have fun, adds them to the bus, and then displays who is on the bus. 
console.log(" ")
console.log("Add a student to the bus and see if they can have fun!")
console.log(" ")
prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
	var newKid = new student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)
	console.log(" ")
	newKid.canStudentHaveFun();
	newBus.studentEntersBus(newKid)
})

// Sample calls of the removeStudent method for Bonus #1. Un-comment it to run it. 
// newBus.removeStudent('Alex')
// newBus.removeStudent('Kevin')
// newBus.removeStudent('James')