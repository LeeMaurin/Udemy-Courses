let tip = function(total, tip = 0.2) {
  let totalWithTip = total + total * tip;
  console.log(`A ${tip * 100}% tip on $${total} would be $${total * tip}`);
};

tip(20);
tip(30, 0.1);
