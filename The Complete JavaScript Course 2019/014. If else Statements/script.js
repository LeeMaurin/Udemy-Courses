/*****************************
 * If / else statements
 */

var markWeight = 182; //kilograms
var markHeight = 1.59; //meters

var johnWeight = 89;
var johnHeight = 1.62;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's BMI: " + markHigherBMI);

if (markBMI < johnBMI) {
  console.log("Mark's BMI is less than John's BMI");
} else {
  console.log("Mark's BMI is greater than John's BMI");
}
