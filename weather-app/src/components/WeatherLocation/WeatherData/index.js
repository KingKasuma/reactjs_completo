import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {    
    return (<div className="weatherDataCont">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>        
    </div>);
};

export default WeatherData;