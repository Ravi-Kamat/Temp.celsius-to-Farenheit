

const celsiusTemp = 25;

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(fahrenheitTemp); 
