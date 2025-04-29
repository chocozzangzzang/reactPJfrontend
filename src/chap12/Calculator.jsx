import React, { useState } from 'react'
import BoilingComp from './BoilingComp';
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5 ) + 32;
}


function tryConvert(temperature, convertFunc) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    
    const output  = convertFunc(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString(); 
}

function Calculator() {

    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // const onChangeTemperature = (temper) => {
    //     setTemperature(temper);
    // };

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };
    
    const celsius    = scale === "f"? tryConvert(temperature, toCelsius)    : temperature;
    const fahrenheit = scale === "c"? tryConvert(temperature, toFahrenheit) : temperature; 

    return (
        <div>
            <TemperatureInput 
                scale={"c"}
                temperature={celsius}
                onChangeTemperature={handleCelsiusChange}
            />
            <TemperatureInput 
                scale={"f"}
                temperature={fahrenheit}
                onChangeTemperature={handleFahrenheitChange}
            />
            <BoilingComp celsius={parseFloat(celsius)}/>
        </div> 
    )

}

export default Calculator