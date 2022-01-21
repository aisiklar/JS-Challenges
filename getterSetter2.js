// classes, getters and setters
class Thermostat {
    constructor(fahrenheitValue) {
        this._temperature = (fahrenheitValue - 32) * 5 / 9;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(celsiusValue) {
        this._temperature = celsiusValue;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp.toFixed(2));
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp.toFixed(0));