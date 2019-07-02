// Operator Precedence
// Is Mark's BMI Greater than John's BMI

var markWeight = 82; //kilograms
var markHeight = 1.59; //meters

var johnWeight = 89;
var johnHeight = 1.62;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's BMI: " + markHigherBMI);
