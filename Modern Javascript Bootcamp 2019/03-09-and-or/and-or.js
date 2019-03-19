let isGuest1Vegan = true;
let isGuest2Vegan = true;

if (isGuest1Vegan && isGuest2Vegan) {
  console.log('Here is our vegan menu');
} else if (isGuest1Vegan || isGuest2Vegan) {
  console.log('We have both meat and vegan items on the menu');
} else {
  console.log('Here is the meat lovers menu');
}
