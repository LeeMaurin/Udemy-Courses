let convert = function(temp) {
  let celcius = (temp - 32) * (5 / 9);
  return celcius;
};

let temp1 = convert(32);
let temp2 = convert(212);

console.log(temp1 + ' degrees celsius');
console.log(temp2 + ' degrees celsius');
