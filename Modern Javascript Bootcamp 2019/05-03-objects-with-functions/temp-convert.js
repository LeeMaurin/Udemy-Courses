let convert = function(temp) {
  return {
    fahrenheit: temp,
    celsius: (temp - 32) * (5 / 9),
    kelvin: (temp + 459.67) * (5 / 9)
  };
};

let temperature = convert(212);
console.log(
  `The fahrenheit equilvelent is: ${temperature.fahrenheit} degrees.`
);

console.log(`The celsuis equilvelent is: ${temperature.celsius} degrees.`);

console.log(`The kelvin equilvelent is: ${temperature.kelvin} degrees.`);
