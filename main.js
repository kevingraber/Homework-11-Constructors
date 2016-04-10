var prompt = require('prompt');

var student = require('./student.js');
var bus = require('./bus.js');

// prompt.start();

// console.log(student)
// console.log(bus)

var kevin = new student('Kevin', 'male', '10th', 4, 0, 'Never', "Hey I'm walkin' here!")
var alex = new student('Alex', 'male', '12th', 2, 10, 'Sometimes', "What's for lunch?")

// console.log(kevin)

var studentArray = [
	kevin, alex
]

var newBus = new bus(studentArray, 'Christopher', 'Yellow', 20)

// console.log(newBus.studentsOnTheBus)

newBus.busChatter()

// for (var i = 0; i < studentArray.length; i++) {
// 	console.log(studentArray[i].name)
// }

// console.log(studentArray[0][0])
// console.log(kevin)

// console.log(student)