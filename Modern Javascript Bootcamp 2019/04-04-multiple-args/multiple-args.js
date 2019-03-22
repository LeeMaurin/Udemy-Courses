let tip = function(total, tip = 0.2) {
  let totalWithTip = total + total * tip;
  console.log('Your total with tip is: $' + totalWithTip);
};

tip(20);
tip(30, 0.1);
