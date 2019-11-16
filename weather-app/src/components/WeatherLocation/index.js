import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '10 m/s'
}

//const WeatherLocation = () => (
//    <div className="weatherLocationCont">
//        <Location city={"Buenos Aires"}></Location>
//        <WeatherData data={data}></WeatherData>
//    </div>
//);

class WeatherLocation extends Component {
    //1.- Constructor
    //2.- Estado componente
    //3.- Primer render
    //4.- Evento OnClick
    //5.- setState
    //6.- Segundo render
    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        };
    }

    handleUpdateClick = () => {        
        this.setState({            
            data: data2
        })
    }

    render(){
        const { city , data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }    
};

export default WeatherLocation;