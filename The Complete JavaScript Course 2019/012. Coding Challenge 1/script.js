/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var markWeight = 82; //kilograms
var markHeight = 1.59; //meters

var johnWeight = 89;
var johnHeight = 1.62;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's BMI: " + markHigherBMI);
